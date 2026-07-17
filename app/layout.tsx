import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-bricolage",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Azhar Uddin — Software Engineer",
  description:
    "Software Engineer with 4+ years in PHP, Laravel, WordPress & WooCommerce. I build custom plugins, CRM integrations, and conversion-tracking setups for stores that sell every day.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${publicSans.variable} ${ibmPlexMono.variable}`}>
      <body className="bg-cream text-ink font-sans antialiased selection:bg-rust selection:text-[#FFF7ED]">
        {children}
      </body>
    </html>
  );
}
