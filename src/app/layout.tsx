import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import APIProvider from "@/context/apiContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RestEz",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <APIProvider>
          {/* <Navbar /> */}
          {children}
        </APIProvider>
      </body>
    </html>
  );
}
