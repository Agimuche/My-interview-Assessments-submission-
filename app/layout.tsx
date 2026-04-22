import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-[#1a1a2e]" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
