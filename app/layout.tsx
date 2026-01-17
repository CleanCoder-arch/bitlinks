import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local"
import Shorten from "@/app/shorten/page";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BitLinks - Your Trusted URL Shortner",
  description: "BitLinks helps you shorten your URL's easily ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        bg-purple-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
