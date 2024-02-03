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
import { CombindSearchProps } from "./page";
import { ThemeProvider } from "./theme-provider";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout(props: {
  children,
}) {
  let { children } = props;
  return (
    <html lang={getCurrentLang()}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={'  dark:bg-solarized-base03 dark:text-slate-300    ' + inter.className}>
          <TopNav></TopNav>
          <CenterPart children={children as any} />
          <Footer></Footer>
        </body>
      </ThemeProvider>
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