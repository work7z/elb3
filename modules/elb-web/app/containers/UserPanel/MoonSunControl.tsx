'use client'

import { COMMON_CLZ_ANCHOR_TEXT } from "@/app/common/clz"
import RegularLink from "@/app/components/RegularLink"
import { MoonIcon, Cog8ToothIcon, SunIcon } from '@heroicons/react/24/solid'
import { Dot } from "@/app/utils/TranslationUtils"
import { CombindSearchProps } from "@/app/page"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react"

export default () => {
    const { theme, setTheme } = useTheme();

    let [mounted, setMount] = useState(false)
    useEffect(() => {
        setMount(true)
    }, [])

    if (!mounted) {
        return null;
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