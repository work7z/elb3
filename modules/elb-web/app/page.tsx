import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Head from 'next/head'
import { Props } from "next/script";


export default function Home() {
  return (
    <main className="">
      <h1 className="">
        <span>English Learning Base III</span>  {Math.random()}
      </h1>
    </main>
  );
}


export async function generateMetadata(
  { }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "English Learning Base III",
  };
}