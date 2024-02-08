import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "KLAW | Portfolio Page",
  description: "KLAW Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/klaw.ico" sizes="any" />
      </head>
      <body className="bodi">{children}</body>
    </html>
  );
}
