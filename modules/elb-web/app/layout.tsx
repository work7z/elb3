import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Head from 'next/head'
import { Props } from "next/script";
import { Dot } from "./utils/TranslationUtils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}



export async function generateMetadata(
  { }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: Dot("R_avql_Sp", "English Learning Base III"),
    description: Dot("JWT3EJA1A", "{0} is an interactive online forum dedicated to facilitating communication and learning among English language learners.", 'elb3.com'),
    icons: [
      "docusaurus.svg"
    ]
  };
}