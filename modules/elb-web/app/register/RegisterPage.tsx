'use client'

import React from 'react'
import GrailLayoutWithUser from '@/app/__CORE__/containers/GrailLayoutWithUser'
import { CombindSearchProps } from '@/app/page'
import CardPanel from '@/app/__CORE__/components/CardPanel';
import { PageProps } from '../__CORE__/types/pages';
import { Dot } from '../__CORE__/utils/TranslationUtils';
import VisiterGuideInfoPanel from '../__CORE__/containers/VisiterGuideInfoPanel';
import PasswordInput from '../__CORE__/components/PasswordInput'
import UserInput from '../__CORE__/components/UsernameInput'
import PhoneInput from '../__CORE__/components/PhoneInput'
import EmailInput from '../__CORE__/components/EmailInput'
import VerifyCodeInput from '../__CORE__/components/VerifyCodeInput'
import TwTabs from '../__CORE__/components/TwTabs'
import '../__CORE__/script/preline-init'
import { Metadata, ResolvingMetadata } from 'next';
import { getWebsiteName } from '../__CORE__/common/config';

export default function RegisterPage(props: { registerPageProps: RegisterPageProps }) {
    let { registerPageProps: pageProps } = props;
    let [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, [])
    if (!mounted) {
        return <div>loading...</div>
    }
    return <form className='' method="POST" action="/register" >
        <CardPanel className='p-4 py-8'>
            <div className='mx-20 '>
                <div className='text-2xl mb-4 font-bold'>
                    {Dot("yOwdRB", "Create an Account")}
                </div>

                <div className='space-y-2 mt-4 max-w-md'>
                    <div className='mb-2'>
                    </div>
                    <UserInput name='user' />
                    <EmailInput name='email' />
                    <PasswordInput name='password' strongMode></PasswordInput>
                    <PasswordInput name='confirmPassword' label={Dot("TXh_K", "Confirm Password")} ph={Dot("sfooX", "Confirm your password")}></PasswordInput>
                    <VerifyCodeInput codeImgBase64={''}></VerifyCodeInput>
                    <div className='clearfix  clear-none'></div>
                    <div className='pt-6'>
                        <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-solarized-base02Light5 text-white hover:bg-solarized-base02Light3 transition-all disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            {Dot("register", "Register Now")}
                        </button>
                    </div>
                    <div className=' text-right text-sm space-x-2'>
                        <span>                        {Dot("3Lfbe", "Already Have an Account?")}</span>
                        <a className='anchor-text text-sm' href="/login">
                            {Dot("wOpCO", "Click to Login", "")}
                        </a>
                    </div>


                </div>
            </div>
        </CardPanel>
    </form>
}

export type RegisterPageProps = PageProps<{}, { type: string }>