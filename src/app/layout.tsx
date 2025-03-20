import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import APIProvider from "@/context/apiContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RestEz - Simplified REST API Development",
  description: "A starter Next.js application for building and managing REST APIs with ease. Powered by create-next-app and designed for developers.",
  keywords: "REST API, Next.js, developer tools, API management, RestEz",
  authors: [{ name: "Your Name or Team", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "RestEz - Simplified REST API Development",
    description: "Kickstart your REST API projects with RestEz, a Next.js-based starter kit.",
    url: "https://restez.yourdomain.com",
    siteName: "RestEz",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RestEz - Simplified REST API Development",
    description: "A Next.js starter kit for REST API development. Get started with ease!",
    creator: "@yourTwitterHandle",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <APIProvider>
          <Navbar />
          {children}
        </APIProvider>
      </body>
    </html>
  );
}
