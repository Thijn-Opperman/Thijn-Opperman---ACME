import "./globals.css";

import type { Metadata } from "next";
import { inter } from "./fonts";

import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "ACME – Smart solutions",
  description:
    "ACME: a fictional company with great products and friendly service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 flex flex-col min-h-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
