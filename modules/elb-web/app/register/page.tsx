
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
import RegisterPage, { RegisterPageProps } from './RegisterPage'

export default function Page(props: RegisterPageProps) {
    let { searchParams, params } = props;
    let combindSearchProps = props;
    return <GrailLayoutWithUser rightJSX={
        [
            <VisiterGuideInfoPanel></VisiterGuideInfoPanel>,
            <CardPanel className="mt-2" children={
                <div className='p-2 '>
                    <h3 className='font-semibold mb-2'>{Dot("Pu0pj23rR", "Why Telephone number is required?")}</h3>
                    <p className='text-xs space-y-2'>
                        <div>
                            {Dot("o4GdNzX6xS", "Firstly, Owing to the well-known regulation requirement on the Earth, each user is required to provide a valid telephone number to register.")}
                        </div>
                        <div>
                            {Dot("7BtpafuC", "ALso, in this community, we do not talk about politics or any other sensitve topics, and of course do not welcome spam or advertisement. That is why we require a valid telephone number for registeration, to prevent any illicit or improper activities.")}
                        </div>
                        <div>
                            {Dot("KAiEq6dcwL5", "Lastly, as a friendly reminder, each user should take the responsibility for their own words and actions.")}
                            {Dot("VWERmdNh", "Do love your life, and respect others, and never ever forever do anything illegal in this community.")}
                        </div>
                    </p>
                </div>
            }>
            </ CardPanel>
        ]
    } combindSearchProps={combindSearchProps}>
        <div className='space-y-2 flex-1'>
            <RegisterPage pageProps={props}></RegisterPage>
        </div>
    </GrailLayoutWithUser>
}



export async function generateMetadata(
    Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    return {
        title: getWebsiteName(Dot("dHWho", "Sign Up")),
    };
}