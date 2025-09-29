import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Cuatecontzi | Abogado en CDMX",
  description:
    "Despidos injustificados, finiquitos, asesoría a empresas y representación legal en la Ciudad de México. Primera consulta gratuita.",
  openGraph: {
    title: "David Cuatecontzi | Abogado en CDMX",
    description:
      "Despidos injustificados, finiquitos, asesoría a empresas y representación legal en la Ciudad de México.",
    type: "website",
    locale: "es_MX",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
