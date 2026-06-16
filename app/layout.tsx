import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: {
    default: "Drop Su Arıtma | Profesyonel Su Arıtma Sistemleri",
    template: "%s | Drop Su Arıtma",
  },
  description:
    "Drop Su Arıtma ile profesyonel su arıtma sistemi kurulum, bakım ve tamir hizmetleri. Temiz ve sağlıklı su için bizi arayın.",
  openGraph: {
    siteName: "Drop Su Arıtma",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
