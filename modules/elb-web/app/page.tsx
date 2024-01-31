import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Head from 'next/head'
import { Props } from "next/script";
import { Dot } from "./utils/TranslationUtils";
import { getWebsiteName } from "./common/config";
import { TopNav } from "./containers/TopNav";
import CenterPart from "./containers/CenterPart";


export default function Home() {
  let cardClz = `h-16 rounded-sm shadow-sm  bg-white w-full `
  return (
    <main className="">
      <TopNav></TopNav>
      <CenterPart children={<div className=" flex flex-row space-x-4 ">
        <div className={cardClz + ` p-2`} style={{ flex: '1' }}>
          <div>left</div>
        </div>
        <div className={cardClz} style={{
          width: '290px'
        }}>
          right
        </div>
      </div>}></CenterPart>
    </main>
  );
}


export async function generateMetadata(
  { }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: getWebsiteName(),
  };
}