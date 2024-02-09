import React from 'react'
import GrailLayoutWithUser from '@/app/__CORE__/containers/GrailLayoutWithUser'
import { CombindSearchProps } from '@/app/page'
import CardPanel from '@/app/__CORE__/components/CardPanel';
import { PageProps } from '../__CORE__/types/pages';
import { Dot } from '../__CORE__/utils/TranslationUtils';
import VisiterGuideInfoPanel from '../__CORE__/containers/VisiterGuideInfoPanel';

// write LoginPage for including phone number and password
function LoginPage() {
    return <div className=''>
        <CardPanel className='p-4'>
            <div className='w-[80%] mx-auto'>
                <div className='text-2xl font-bold'>
                    登录
                </div>
                <div className='space-y-2'>
                    <div className='space-y-2'>
                        <label className='text-sm'>手机号</label>
                        <input type='text' className='w-full border border-gray-300 rounded-md p-2' />
                    </div>
                    <div className='space-y-2'>
                        <label className='text-sm'>密码</label>
                        <input type='password' className='w-full border border-gray-300 rounded-md p-2' />
                    </div>
                    <div className='space-y-2'>
                        <button className='w-full bg-blue-500 text-white rounded-md p-2'>登录</button>
                    </div>
                </div>
            </div>
        </CardPanel>
    </div>
}

export default function Page(props: PageProps<{ id: number }, {}>) {
    let { searchParams, params } = props;
    let combindSearchProps = props;
    return <GrailLayoutWithUser rightJSX={
        <VisiterGuideInfoPanel></VisiterGuideInfoPanel>
    } combindSearchProps={combindSearchProps}>
        <div className='space-y-2 flex-1'>
            <LoginPage></LoginPage>
        </div>
    </GrailLayoutWithUser>
}