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
import Layout from './containers/Layout'
import { Sequelize, DataTypes } from 'sequelize';
import fs from 'fs'

// import dbconn from '../app/db/index'

export default async function RootLayout(props: {
  children,
}) {
// let a=  await dbconn()

  let { children } = props;
  return (
    <Layout>{children}</Layout>
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