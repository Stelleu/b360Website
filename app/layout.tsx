import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Intro from "@/components/layout/Intro";
import CustomCursor from "@/components/layout/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "B360 — African Talent, Built for the Global Stage",
  description:
    "B360 is a talent agency specializing in African markets, with deep roots in the Democratic Republic of Congo. Discover. Develop. Connect. Represent. Invest.",
  keywords: [
    "B360",
    "African talent agency",
    "basketball",
    "DRC",
    "NBA agent",
    "artist management",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "B360 — African Talent, Built for the Global Stage",
    description: "From African roots to the global stage.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-ink text-cream antialiased">
        <SmoothScroll>
          <Intro />
          <CustomCursor />
          <div className="grain-overlay" aria-hidden />
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
