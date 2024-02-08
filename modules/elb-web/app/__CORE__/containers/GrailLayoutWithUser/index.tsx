import { CombindSearchProps } from "../../page"
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Head from 'next/head'
import { Props } from "next/script";
import { Dot } from "../.../__CORE__/_utils/TranslationUtils";
import { getWebsiteName } from "../../common/config";
import { TopNav } from "../TopNav";
import CenterPart from "../CenterPart";
import CardPanel from '../../components/CardPanel'
import NodeHorizontalBar from "../TabGroupHorizontalBar";
import _, { random } from "lodash";
import UserPanel from "../UserPanel";
import { useParams, useSearchParams } from "next/navigation";
import HomeInner from '../../home'
import { usePathname } from 'next/navigation';
import React, { } from "react";

export default (props: {
    combindSearchProps: CombindSearchProps & { rounded?: boolean }
} & { children: any }) => {
    return (
        <main className="" >
            <div className=" flex flex-row space-x-4 ">
                {props.children}
                <div
                    style={{
                        width: '290px'
                    }}
                    className="space-y-2"
                >
                    <CardPanel>
                        <UserPanel {...props.combindSearchProps}></UserPanel>
                    </CardPanel>
                </div>
            </div >
        </main >
    );
}

