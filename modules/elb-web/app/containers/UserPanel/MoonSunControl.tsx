'use client'

import { COMMON_CLZ_ANCHOR_TEXT } from "@/app/common/clz"
import RegularLink from "@/app/components/RegularLink"
import { MoonIcon, Cog8ToothIcon, SunIcon } from '@heroicons/react/24/solid'
import { Dot } from "@/app/utils/TranslationUtils"
import { CombindSearchProps } from "@/app/page"
import { useTheme } from "next-themes";

export default () => {
    const { theme, setTheme } = useTheme();

    return theme == "dark" ? (
        <SunIcon className="cursor-pointer h-5 w-5 text-yellow-300" onClick={() => {
            setTheme('light')
        }} />
    ) : (
        <MoonIcon className=" cursor-pointer h-5 w-5 text-blue-300" onClick={() => {
            setTheme('dark')
        }} />
    )
}