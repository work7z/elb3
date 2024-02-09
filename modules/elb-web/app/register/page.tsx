import React from 'react'
import GrailLayoutWithUser from '@/app/__CORE__/containers/GrailLayoutWithUser'
import { CombindSearchProps } from '@/app/page'
import CardPanel from '@/app/__CORE__/components/CardPanel';
import { PageProps } from '../__CORE__/types/pages';
import VisiterGuideInfoPanel from '../__CORE__/containers/VisiterGuideInfoPanel';


export default function Page(props: PageProps<{ id: number }, {}>) {
    let { searchParams, params } = props;
    let combindSearchProps = props;
    return <GrailLayoutWithUser rightJSX={
        <VisiterGuideInfoPanel></VisiterGuideInfoPanel>
    } combindSearchProps={combindSearchProps}>
        <div className='space-y-2 flex-1'>
            <div>this is register page</div>
        </div>
    </GrailLayoutWithUser>
}