import { Inter } from "next/font/google";
import "./globals.css";
import { getCurrentLang } from "./utils/TranslationUtils";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Head from 'next/head'
import { Props } from "next/script";
import { Dot } from "./utils/TranslationUtils";
import { getWebDesc, getWebsiteName } from "./common/config";
import { TopNav } from "./containers/TopNav";
import CenterPart from "./containers/CenterPart";
import CardPanel from './components/CardPanel'
import NodeHorizontalBar from "./containers/TabGroupHorizontalBar";
import Footer from "./containers/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={getCurrentLang()} className={true ? '' : " dark "}>
      <body className={'  dark:bg-zinc-900 dark:text-white ' + inter.className}>
        <TopNav></TopNav>
        <CenterPart children={children as any}>
        </CenterPart>
        <Footer></Footer>
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
    description: getWebDesc(),
    icons: [
      "icon6.png"
    ]
  };
}