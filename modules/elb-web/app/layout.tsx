import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Head from 'next/head'
import { Props } from "next/script";
import { Dot, getCurrentLang } from "./utils/TranslationUtils";
import { getWebsiteName } from "./common/config";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={getCurrentLang()} >
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
    title: getWebsiteName(),
    description: Dot("lWqYc","ELB3 community is derived from the WeChat group {0}, in this community, we study knowledge and share our life stories, experiences, and thoughts.","English Learning Base III"),
    icons: [
      // "docusaurus.svg"
      // "icon2-nav2.png"
      // "icon-nav.png"
      // "icon3.png"
      // "icon4.png"
      // "icon5.png"
      "icon6.png"
    ]
  };
}