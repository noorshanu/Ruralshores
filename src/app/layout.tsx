import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";




export const metadata: Metadata = {
  title: "Ruralshores Skills Academy - Empowering Youth",
  description: "RSA delivers workforce solutions that help companies grow while creating dignified livelihoods. Slide. Training. Empowering youth through skill-based industry",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/fav.png',
    apple: '/fav.png',
  },
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
