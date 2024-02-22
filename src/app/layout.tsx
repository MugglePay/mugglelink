import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  title: "MuggleLink is a P2P payment protocol",
  description: "Accept crypto on telegram and other universal Social Platform."",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={cn(inter.className, 'gradient-background')}>{children}</body>


    </html>
  );
}
