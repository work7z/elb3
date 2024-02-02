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
import { usePathname } from 'next/navigation';

export default function Home({ searchParams }) {
  let testNodes = ['生活', '闲聊', '历程', 'PETS3', '纯英语', '语法交流', '单词PK']
  let randomGetOneFromArr = (arr: string[]) => {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  let activeTabs = searchParams.tabs
  return (
    <main className="">
      <div className=" flex flex-row space-x-4 ">


        <CardPanel className='' style={{
          flex: '1'
        }}>
          <NodeHorizontalBar activeId={activeTabs}></NodeHorizontalBar>

          <div className="px-4 py-3 flex justify-between items-center bg-gray-100  min-h-8 border-slate-200  shadow-inner border-t border-b" >
            <div className="space-x-4">
              {
                testNodes.map(x => {
                  return <a href={'/go/' + x} className="hover:underline text-slate-700">{x}</a>
                })
              }
            </div>
          </div>
          <div>
            {
              /** write a topic list, with example value */
              _.fill(Array(10), 1).map(x => {
                return <div className=" p-3 py-3 flex border-slate-100 border-b  ">
                  <div className={" rounded flex items-center justify-center w-14 h-14  bg-sky-200"}>
                    L
                  </div>
                  <div className="ml-2 flex-shrink " style={{
                    flex: '1'
                  }}>
                    <div>
                      <a href="/t/1" className="text-slate-600 hover:underline text-md ">{
                        randomGetOneFromArr([
                          "群晖相册管理 photos mobile 的逻辑是？",
                          "想买个 Typec 转 3.5mm 的转接头，音质好一点的，各位有推荐吗",
                          "遇到玄学问题了， v2ray ws tls 模式无法配置 path 路径，配置了就不能连接。",
                          "总想要个高 base 咋办",
                          "请问国外，闯红灯的多吗？"
                        ])
                      }</a>
                    </div>
                    <div className="space-x-3 text-sm mt-2 text-gray-400 flex items-center">
                      <a href="/go/test" className="bg-slate-100 text-gray-400 hover:bg-slate-200 rounded-sm transition-all duration-100 px-1 py-1 text-xs">{randomGetOneFromArr(testNodes)}</a>
                      <a href="/go" className="hover:underline text-gray-400 font-medium">{randomGetOneFromArr(["Min-广州-PETS3", "布布-上海-PETS", "本老师-广州-中考", "乐乐-浙江-PETS2"])}</a>
                      <span className="text-gray-300">{randomGetOneFromArr(["1小时30分钟前", "3小时50分钟前", "2分钟前", "刚刚"])}</span>
                      <span className="text-gray-300">最后回复来自于
                        <a href="/go" className="hover:underline text-gray-400 font-medium">{randomGetOneFromArr(["Min", "布布", "惠惠子", "大鱼", "Ben老师"])}</a>
                      </span>
                    </div>
                  </div>
                  <div className='p-2 mt-2'>
                    <a href="/t/1" target="_blank" className=" nav-size-icon flex justify-center items-center rounded-lg  text-white bg-violet-300 mt-1 font-mono text-bold  px-2 text-md py-0" style={{
                      fontWeight: 'bold'
                    }}>3</a>
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
            <UserPanel></UserPanel>
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