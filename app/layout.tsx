import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import StoreProvider from "./StoreProvider";

import NavBar from "@/components/common/NavBar";
import { Toaster } from "@/components/ui/Toast/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E shop",
  description: "A Ecommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
        <NavBar />
        <div className="max-w-7xl mx-auto">
        {children}
        </div>
        </StoreProvider>
        <Toaster/>
      </body>
    </html>
  );
}
