import type { Metadata } from "next";
import localFont from "next/font/local";
import { Rubik } from "next/font/google";
import "./globals.css";
import Footer from "./(components)/Navigation/Footer";
import Navbar from "./(components)/Navigation/Navbar";

const rubik = Rubik({ subsets: ["latin"] });

const clashGrotesk = localFont({
  src: "../public/fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash-grotesk",
});

export const metadata: Metadata = {
  title: "Parho",
  description: "Exam hai? Just Parho!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${rubik.className}  ${clashGrotesk.variable} bg-background`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
