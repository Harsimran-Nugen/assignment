import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="bg-gradient-to-r from-blue-300 to-green-400 flex justify-center items-center 2xl:p-4 h-full w-full gap-12">{children}</div>
      </body>
    </html>
  );
}
