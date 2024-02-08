'use client'

import { COMMON_CLZ_ANCHOR_TEXT } from "@/app/__CORE__/common/clz"
import RegularLink from "@/app/__CORE__/components/RegularLink"
import { MoonIcon, Cog8ToothIcon, SunIcon } from '@heroicons/react/24/solid'
import { Dot } from "@/app/__CORE__/utils/TranslationUtils"
import { CombindSearchProps } from "@/page"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react"

export default () => {
    const { theme, setTheme } = useTheme();

    let [mounted, setMount] = useState(false)
    useEffect(() => {
        setMount(true)
    }, [])

    if (!mounted) {
        return <span></span>;
    }

    return theme == "dark" ? (
        <SunIcon className="cursor-pointer h-5 w-5 text-yellow-300" onClick={() => {
            setTheme('light')
        }} />
    ) : (
        <MoonIcon className=" cursor-pointer h-5 w-5 text-solarized-cyan" onClick={() => {
            setTheme('dark')
        }} />
    )
}