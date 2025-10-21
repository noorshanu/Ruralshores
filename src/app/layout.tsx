import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export const metadata: Metadata = {
  metadataBase: new URL("https://www.ruralshoresskillsacademy.com"),
  title: {
    default: "RuralShores Skills Academy (RSA) — Empowering Youth & Businesses",
    template: "%s | RuralShores Skills Academy",
  },
  description:
    "RSA enables companies to scale with skilled rural talent. Training, workforce solutions, and marketing-as-a-service that deliver measurable outcomes.",
  keywords: [
    "RuralShores Skills Academy",
    "RSA",
    "rural talent",
    "workforce solutions",
    "training",
    "MaaS",
    "marketing as a service",
    "India",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "RuralShores Skills Academy",
    title: "RuralShores Skills Academy (RSA)",
    description:
      "Empowering youth and enabling businesses with skilled rural talent and scalable services.",
    images: [{ url: "/blogbanner.png" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "RuralShores Skills Academy (RSA)",
    description:
      "Empowering youth and enabling businesses with skilled rural talent and scalable services.",
    images: ["/blogbanner.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
