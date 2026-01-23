import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaeyeong Lee (Fin)",
  description: "Academic Personal Website of Jaeyeong Lee (Fin), Security Researcher.",
};

import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-[#333333] dark:text-[#e5e5e5] bg-white dark:bg-[#1a1a1a]`}>
        <div className="flex flex-col lg:flex-row min-h-screen">
          <Sidebar />
          <div className="flex-1 lg:ml-72">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
