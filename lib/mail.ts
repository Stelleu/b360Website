import nodemailer from "nodemailer";

const CONTACT_TO = process.env.CONTACT_TO ?? "yacine@ballers.house";

function env(name: string) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

function transporter() {
  const host = env("SMTP_HOST");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  const port = Number(process.env.SMTP_PORT ?? "465");
  const secure =
    process.env.SMTP_SECURE === "true" ||
    (process.env.SMTP_SECURE !== "false" && port === 465);

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function sendContactEmail(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const from = process.env.SMTP_FROM?.trim() || env("SMTP_USER");
  const mail = transporter();

  const text = [
    `New contact form submission`,
    ``,
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Subject: ${input.subject}`,
    ``,
    input.message,
  ].join("\n");

  await mail.sendMail({
    from: `"B360 Agency" <${from}>`,
    to: CONTACT_TO,
    replyTo: `"${input.name.replaceAll('"', "")}" <${input.email}>`,
    subject: `[B360] ${input.subject} — ${input.name}`,
    text,
    html: `
      <div style="font-family:Georgia,serif;line-height:1.5;color:#111">
        <p style="text-transform:uppercase;letter-spacing:0.12em;font-size:12px;color:#888">B360 contact</p>
        <h2 style="margin:8px 0 16px">${escapeHtml(input.subject)}</h2>
        <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
        <p style="white-space:pre-wrap;margin-top:20px">${escapeHtml(input.message)}</p>
      </div>
    `,
  });
}
