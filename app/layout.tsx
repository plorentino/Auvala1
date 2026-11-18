import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AUVALA — Private Villa Sourcing & Long-Term Stay Advisory | Bali",
  description:
    "Direct-to-management villa sourcing and long-term tenant placement across Canggu, Pererenan, Uluwatu, and Ubud.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#0B0B0A] text-[#F4F1EA] font-sans antialiased selection:bg-[#C6A87C]/30 selection:text-[#F4F1EA]">
        {children}
      </body>
    </html>
  );
}
