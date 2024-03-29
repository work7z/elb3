'use client'

import React, { useEffect } from 'react'
import GrailLayoutWithUser from '@/app/__CORE__/containers/GrailLayoutWithUser'
import { AuthInfoProps, CombindSearchProps } from '@/app/[lang]/page'
import CardPanel from '@/app/__CORE__/components/CardPanel';
import { PageProps } from '@/app/__CORE__/types/pages';
import { Dot } from '@/app/__CORE__/utils/ClientTranslationUtils';
import VisiterGuideInfoPanel from '@/app/__CORE__/containers/VisiterSidebar';
import PasswordInput from '@/app/__CORE__/components/PasswordInput'
import UserInput from '@/app/__CORE__/components/UsernameInput'
import PhoneInput from '@/app/__CORE__/components/PhoneInput'
import EmailInput from '@/app/__CORE__/components/EmailInput'
import VerifyCodeInput from '@/app/__CORE__/components/VerifyCodeInput'
import TwTabs from '@/app/__CORE__/components/TwTabs'
import '@/app/__CORE__/script/preline-init'
import { Metadata, ResolvingMetadata } from 'next';
import { getWebsiteName } from '@/app/__CORE__/common/config';
import { LoginPageProps } from '../login/LoginPage';
import LanguagePicker from '@/app/__CORE__/containers/LanguagePicker';
import LoadingWrapper from '@/app/__CORE__/containers/LoadingWrapper';
import { cookies } from 'next/headers';
import { getCookies } from 'cookies-next';
import _ from 'lodash';
import { fmtURL_Client } from '@/app/__CORE__/utils/ClientRouterHelpers';
import { loadDOT, useTTT2 } from '../register/i18n-types';

function deleteAllCookies() {
    document.cookie = ''
}
let a = loadDOT("AsgwGFZldg")
export default (p: AuthInfoProps) => {
    a()

    useEffect(() => {
        deleteAllCookies()
        localStorage.clear()
        location.href = '/'
    }, [])
    return (
        <div className='space-y-2 flex-1'>
            <LoadingWrapper>
                <CardPanel className='p-2 min-h-8'>
                    <div>
                        {Dot("lOdrxd__", "Okay, you have logged out. We will redirect you to the home page in a few seconds.")}
                    </div>
                </CardPanel>
            </LoadingWrapper>
        </div>
    )
}
