import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Head from 'next/head'
import { Props } from "next/script";
import { Dot } from "./utils/TranslationUtils";
import { getWebsiteName } from "./common/config";
import { TopNav } from "./containers/TopNav";
import CenterPart from "./containers/CenterPart";
import CardPanel from './components/CardPanel'
import NodeHorizontalBar from "./containers/NodeHorizontalBar";

export default function Home() {
  return (
    <main className="">
      <TopNav></TopNav>
      <CenterPart children={<div className=" flex flex-row space-x-4 ">
        <CardPanel className='p-2' style={{
          flex: '1'
        }}>
            <NodeHorizontalBar></NodeHorizontalBar>
        </CardPanel>
        <div
          style={{
            width: '290px'
          }}
          className="space-y-2"
        >
          <CardPanel>
            user panel
          </CardPanel>
          <CardPanel>
            settings
          </CardPanel>
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