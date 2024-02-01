import Image from "next/image";
import React from 'react'
import type { Metadata, ResolvingMetadata } from "next";
import Head from 'next/head'
import { Props } from "next/script";

type PassProps = { className?: string, children: any, style?: any }

export default (props: PassProps) => {
    let cardClz = `h-16 rounded-sm shadow-sm  bg-white w-full `;
    return <div className={cardClz + ' ' + props.className} style={props.style}>{props.children}</div>
}