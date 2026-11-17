import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (v: string) => v.replace(/[\r\n]+/g, " ").trim();

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    typeof body.subject !== "string"
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot : un humain ne remplit jamais ce champ caché.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name).slice(0, 100);
  const email = clean(body.email).slice(0, 200);
  const subject = clean(body.subject).slice(0, 100);
  const message = body.message.trim().slice(0, 5000);

  if (!name || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!process.env.RESEND_API_KEY || !to || !from) {
    console.error("Error: contact the admin to fix the issue");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[Site] ${subject} — ${name}`,
    text: `Nom : ${name}\nEmail : ${email}\nSujet : ${subject}\n\n${message}`,
  });

  if (error) {
    console.error("Contact: erreur Resend", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}