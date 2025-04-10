import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { VT323 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vt323 = VT323({
  weight: "400",
});

export const metadata: Metadata = {
  title: "Convergence",
  description:
    "A website for hosting articles from various academic clubs of IISER Mohali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${vt323.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
