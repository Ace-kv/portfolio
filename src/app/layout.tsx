import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { personalData } from "../../data/page-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume",
  description: "Full Stack Web App with Next.js 14 - Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white flex flex-col sm:flex-row">
        <Sidebar data={personalData}/>
        <main className="grow-full w-full sm:basis-2/3 p-16 ml-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
