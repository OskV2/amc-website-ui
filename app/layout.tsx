import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ 
  weight: '400',
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "AMC - Auto Moto Centrum",
  description: "AMC - Auto Moto Centrum Zielona Góra",
};

const RootLayout = ({children}: Readonly<{ children: React.ReactNode}>) => {
  return (
    <html className="scroll-smooth scroll-m-8" lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout