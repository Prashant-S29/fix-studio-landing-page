import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NAVBAR from "@/components/navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fix Studio Landing Page",
  description: "Crafted by Code-Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="hidden md:block">
          <NAVBAR />
        </div>
        {children}
      </body>
    </html>
  );
}
