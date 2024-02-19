
import React from 'react'
import GrailLayoutWithUser from '@/app/__CORE__/containers/GrailLayoutWithUser'
import { AuthInfoProps, CombindSearchProps } from '@/app/[lang]/page'
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
import LoginPage, { LoginPageProps } from './LoginPage'
import { getWebsiteName } from '../__CORE__/common/config';

// export type LoginPageProps =  PageProps<{},{ type: string }>
export default function Page(props: LoginPageProps) {
    let { searchParams, params } = props;
    let combindSearchProps = props;
    return <GrailLayoutWithUser

        extraInSidebar={p => <>
            {
                [
                    <CardPanel className="mt-2" children={
                        <div className='p-2 '>
                            <h3 className='font-semibold mb-2'>{Dot("-wHWkv2OC", "Why cannot I sign in?")}</h3>
                            <div className='text-xs space-y-2'>
                                <div>
                                    {Dot("aUdtds_qwY", "Normally, you can sign in with your user ID or phone number successfully even if you have violated rules in this community.")}
                                </div>
                                <div>
                                    {
                                        Dot("NdqZcRL2QN", "In case you forgot your password, you can reset it by clicking the 'Forgot Password' link.")
                                    }
                                    {
                                        Dot("lu2T6idPY", "If you think there is a problem with your account, please contact the webmaster.")
                                    }
                                </div>
                            </div>
                        </div>
                    }></CardPanel>,
                    <CardPanel className="mt-2" children={
                        <div className='p-2 '>
                            <h3 className='font-semibold mb-2'> {Dot("dldeoeqwc", "Friendly Reminders")}</h3>
                            <div className='text-xs space-y-2'>
                                <div className='pl-3 '>
                                    <ul className='list-disc'>
                                        <li>{Dot("dnsz7fwNx", "User ID is case-sensitive.")}</li>
                                        <li>{Dot("zuxd0y-kmA", "User ID or PhoneNumber has no whitespace.")}</li>
                                        <li>{Dot("Bz_WdwvAPn", "Check if CAPTCHA is provided correctly.")}</li>
                                        <li>{Dot("H39ddc0df", "Try to sign in later if failed too many times.")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>}></CardPanel>,
                    <CardPanel className="mt-2" children={
                        <div className='p-2 '>
                            <h3 className='font-semibold mb-2'>{Dot("-wdkeq", "Is this community non-profit?")}</h3>
                            <div className='text-xs space-y-2'>
                                <div>
                                    {Dot("7zqdufsdddJ", "Yes, for sure. The website ELB3.com is derived from the non-profit WeChat chat group, {0}, which aim at creating a friendly, ADs-free and comfortable English learning atmosphere. ", "English Learning Base")}
                                </div>

                                <div>
                                    {Dot("3I-dkqkwr", "Note that we do NOT provide any commercial traning courses for English exams or any other subjects exams on this website, and we are not planning to do so in the future. ")}
                                </div>

                                <div>
                                    {Dot("4N79HNWiA", "To ensure it is a non-profit community, we also open its entire source code on GitHub, which can be found at footer of this page.")}
                                </div>

                            </div>
                        </div>
                    }></CardPanel>
                ]
            }
        </>}
        sidebarViewMode='visiter' combindSearchProps={combindSearchProps} main={(p: AuthInfoProps) => (
            <div className='space-y-2 flex-1'>
                <LoginPage loginPageProps={props}></LoginPage>
            </div>
        )}></GrailLayoutWithUser>
}


export async function generateMetadata(
    Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    return {
        title: getWebsiteName(Dot("b_vts", "Sign In")),
    };
}