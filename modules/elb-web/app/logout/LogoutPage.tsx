'use client'

import React, { useEffect } from 'react'
import GrailLayoutWithUser from '@/app/__CORE__/containers/GrailLayoutWithUser'
import { AuthInfoProps, CombindSearchProps } from '@/app/page'
import CardPanel from '@/app/__CORE__/components/CardPanel';
import { PageProps } from '../__CORE__/types/pages';
import { Dot } from '../__CORE__/utils/TranslationUtils';
import VisiterGuideInfoPanel from '../__CORE__/containers/VisiterSidebar';
import PasswordInput from '../__CORE__/components/PasswordInput'
import UserInput from '../__CORE__/components/UsernameInput'
import PhoneInput from '../__CORE__/components/PhoneInput'
import EmailInput from '../__CORE__/components/EmailInput'
import VerifyCodeInput from '../__CORE__/components/VerifyCodeInput'
import TwTabs from '../__CORE__/components/TwTabs'
import '../__CORE__/script/preline-init'
import { Metadata, ResolvingMetadata } from 'next';
import { getWebsiteName } from '../__CORE__/common/config';
import { LoginPageProps } from '../login/LoginPage';
import LanguagePicker from '../__CORE__/containers/LanguagePicker';
import LoadingWrapper from '../__CORE__/containers/LoadingWrapper';

export default (p: AuthInfoProps) => {
    useEffect(() => {
        setTimeout(() => {
            location.href = '/'
        }, 3000)
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
