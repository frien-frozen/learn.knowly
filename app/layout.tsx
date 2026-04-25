import { Suspense } from "react";
import type { Metadata } from "next";
import { Nunito, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Knowly Learn | Cambridge & Pearson Video Darslar — Bepul",
    template: "%s | Knowly Learn",
  },
  description:
    "Cambridge IGCSE, A-Levels va Pearson Edexcel bo'yicha bepul video darslar. O'zbekiston o'quvchilari uchun ona tilida murakkab fanlarni o'rganing.",
  keywords: [
    "cambridge igcse video darslar", "a-levels o'zbek tilida", "pearson edexcel bepul",
    "biologiya video dars", "fizika video dars", "kimyo video dars", "matematika video dars",
    "igcse biology uzbek", "igcse physics uzbek", "igcse chemistry uzbek",
    "bepul online ta'lim o'zbekiston", "knowly learn", "learn.knowly.uz",
    "cambridge o'zbekiston", "maktab darslari video"
  ],
  metadataBase: new URL("https://learn.knowly.uz"),
  alternates: {
    canonical: "https://learn.knowly.uz",
  },
  openGraph: {
    title: "Knowly Learn | Bepul Cambridge & Pearson Video Darslar",
    description:
      "IGCSE, A-Levels, Edexcel — bepul video darslar, o'zbek tilida. Hamma fan bo'yicha.",
    url: "https://learn.knowly.uz",
    siteName: "Knowly Learn",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/logos/knowly-full.png",
        width: 1200,
        height: 630,
        alt: "Knowly Learn — Bepul Video Darslar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowly Learn | Bepul Cambridge Video Darslar",
    description: "IGCSE, A-Levels, Edexcel — bepul, o'zbek tilida.",
    images: ["/logos/knowly-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${jakarta.variable} antialiased bg-[#F2F4F7] text-[#101828] font-nunito`}
      >
        <ScrollToTop />
        <Suspense fallback={null}>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  );
}
