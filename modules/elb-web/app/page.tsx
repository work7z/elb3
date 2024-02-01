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
import _ from "lodash";

export default function Home() {
  return (
    <main className="">
    <div className=" flex flex-row space-x-4 ">

<CardPanel className='' style={{
    flex: '1'
  }}>
      <NodeHorizontalBar></NodeHorizontalBar>
    
      <div className="px-4 py-3 flex justify-between items-center bg-gray-100  min-h-8 border-slate-200  shadow-inner border-t border-b" >
        <div className="space-x-4">
        {
          ['生活','闲聊','历程','PETS3','纯英语','语法交流','单词PK'].map(x=>{
            return <a href={'/go/'+x} className="hover:underline text-slate-700">{x}</a>
          })
        }
        </div>
      </div>
      <div>
        {
          /** write a topic list, with example value */
          _.fill(Array(10), 1).map(x=>{
            return <div className=" p-2 flex border-slate-100 border-b  ">
              <div className={" rounded flex items-center justify-center w-14 h-14  bg-sky-200"}>
                L
              </div>
              <div className="ml-2 flex-shrink " style={{
                flex:'1'
              }}>
                <a href="/t/1" className="text-slate-600 hover:underline text-lg ">关于 Figma 如何绘制一个等腰梯形</a>
              </div>
              <div>
                <a href="/t/1" target="_blank" className="rounded-lg  text-white bg-zinc-500  px-3">3</a>
                </div>
            </div>
          })
        }
      </div>
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
</div>
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