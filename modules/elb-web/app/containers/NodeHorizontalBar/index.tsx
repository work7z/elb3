import { getPureWebsiteName } from "@/app/common/config"
import { Dot } from "@/app/utils/TranslationUtils"
import React from 'react'

export type NodeType = {
   id: string;
   label: string;
}

export default (props: {}) => {
   let list: NodeType[] = [
      {
         label: Dot("mBAtv", "Hottest"),
         id: "hot"
      },
      {
         label: Dot("ZCzH8", "Latest"),
         id: "latest"
      },
      {
         label: "PETS",
         id: "pets"
      },
      {
         label: Dot("englishcorner", "English"),
         id: "english"
      },
      {
         label: Dot("43be5", "Diary"),
         id: 'diary'
      },
      {
         label: Dot("WKG7e","Rules"),
         id: 'rules'
      },
      {
         label: Dot("pNwe3", "Other"),
         id: 'other'
      }
   ]
   let activeId = list[0].id
   return <div className="p-2 space-x-2">{
      list.map(x => {
         return <a className={(activeId ==x.id ? ' !bg-zinc-800 hover:!bg-zinc-700 text-white ':'')+` p-2  transition-all duration-200 rounded hover:bg-slate-100  `} href={'/?tabs='+x.id} >{x.label}</a>
      })
   }</div>
}