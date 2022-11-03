import "./globals.css";
import { Inter } from "@next/font/google";
const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Getting Started with NextJs v13</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
