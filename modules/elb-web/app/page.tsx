import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Head from 'next/head'
import { Props } from "next/script";
import { Dot } from "./utils/TranslationUtils";
import { getWebsiteName } from "./common/config";
import { TopNav } from "./containers/TopNav";
import CenterPart from "./containers/CenterPart";
import CardPanel from './components/CardPanel'
import NodeHorizontalBar from "./containers/TabGroupHorizontalBar";
import _, { random } from "lodash";
import UserPanel from "./containers/UserPanel";
import { useParams, useSearchParams } from "next/navigation";
import InnerHome from './home'
import { usePathname } from 'next/navigation';
import React, { useContext } from "react";


type SearchParamType = Partial<{
  tabs: string
}>

export type CombindSearchProps = {
  searchParams: SearchParamType
}

export default function Home(props: { searchParams: SearchParamType }) {
  let { searchParams } = props
  let combindSearchProps: CombindSearchProps = {
    searchParams
  }
  return <InnerHome combindSearchProps={combindSearchProps}></InnerHome>
}


export async function generateMetadata(
  { }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: getWebsiteName(),
  };
}