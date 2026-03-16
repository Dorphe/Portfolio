import type { Metadata } from "next";
import { BIZ_UDMincho, Inter } from "next/font/google";
import "@/app/globals.css";
import "@/style.css";
import { LightboxProvider, Lightbox } from "@/components";

const bizUDMincho = BIZ_UDMincho({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-biz",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mathieu Preston — Senior Product Designer",
  description:
    "Senior product designer with over a decade of experience, aligning business goals, user needs, and data-driven insights to design for measurable outcomes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bizUDMincho.variable} ${inter.variable}`}>
      <body>
        <LightboxProvider>
          {children}
          <Lightbox />
        </LightboxProvider>
      </body>
    </html>
  );
}
