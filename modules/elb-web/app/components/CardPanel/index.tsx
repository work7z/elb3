import Image from "next/image";
import React from 'react'
import type { Metadata, ResolvingMetadata } from "next";
import Head from 'next/head'
import { Props } from "next/script";

type PassProps = { className?: string, children: any, style?: any }

export default (props: PassProps) => {
    return <div className={'  rounded-sm shadow-sm   bg-white dark:bg-slate-800 w-full ' + props.className} style={props.style}>{props.children}</div>
}