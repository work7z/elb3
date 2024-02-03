'use client'

import { Dot } from "@/app/utils/TranslationUtils"
import { useState } from "react"

export default () => {
    let [value, setValue] = useState("")
    return <div className="text-sm ml-6">
        <input
            type="search"
            name="eq"
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
            }}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            placeholder={Dot("_ncx4GSft", "Search Topics")}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    window.open(`https://www.baidu.com/s?wd=${encodeURIComponent(value + " site:elb3.com")}`)
                }
            }}
        >
        </input>
    </div>
}