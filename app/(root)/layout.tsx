import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import AuthProvider from "@/components/Providers";
import { AuthContextProvider } from "@/lib/context/AuthContext";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Borcelle Store",
  description: "Borcelle Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen-2xl mx-auto h-full`}>
        <AuthProvider>
          <AuthContextProvider>
            <ToasterProvider />
            <Header />
            {children}
            <Toaster />
          </AuthContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
