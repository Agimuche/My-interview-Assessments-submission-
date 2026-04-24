import type { Metadata } from "next";
import { Inter, Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Tobams Group | Training and Development",
  description:
    "Tobams Group offers comprehensive Training and Development programs including Learning Management Systems, Corporate Trainings, Personalised Individual Training, Capacity Development, and Management Development Programs.",
  keywords: "training, development, corporate training, leadership, TG Academy, Tobams Group",
  openGraph: {
    title: "Tobams Group | Training and Development",
    description:
      "Comprehensive programs and resources designed to enhance skills, broaden knowledge, and propel careers forward.",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable} ${nunitoSans.variable}`}>
      <body className="antialiased bg-white text-[#1a1a2e] font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
