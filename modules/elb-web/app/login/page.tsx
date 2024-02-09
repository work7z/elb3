import React from 'react'
import GrailLayoutWithUser from '@/app/__CORE__/containers/GrailLayoutWithUser'
import { CombindSearchProps } from '@/app/page'
import CardPanel from '@/app/__CORE__/components/CardPanel';
import { PageProps } from '../__CORE__/types/pages';
import { Dot } from '../__CORE__/utils/TranslationUtils';
import VisiterGuideInfoPanel from '../__CORE__/containers/VisiterGuideInfoPanel';
import PasswordInput from '../__CORE__/components/PasswordInput'
import UserEMailInput from '../__CORE__/components/UserEMailInput'
import '../__CORE__/script/preline-init'

// write LoginPage for including phone number and password
function LoginPage() {
    return <div className=''>
        <CardPanel className='p-4 py-8'>
            <div className='mx-20 '>
                <div className='text-2xl mb-4 font-bold'>
                    {Dot("yOwRB", "Sign In")}
                </div>
                <div className='space-y-2'>
                    <UserEMailInput></UserEMailInput>
                    <PasswordInput></PasswordInput>
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