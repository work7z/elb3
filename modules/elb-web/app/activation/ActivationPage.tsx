'use client'

import React, { useState } from "react";
import CardPanel from "../__CORE__/components/CardPanel";
import PhoneInput from "../__CORE__/components/PhoneInput";
import GrailLayoutWithUser from "../__CORE__/containers/GrailLayoutWithUser";
import LoadingWrapper from "../__CORE__/containers/LoadingWrapper";
import { Dot } from "../__CORE__/utils/TranslationUtils";
import { AuthInfoProps, CombindSearchProps } from "../page";
import AlertErrorPanel from "../__CORE__/containers/AlertErrorPanel";
import VerifyCodeInput from "../__CORE__/components/VerifyCodeInput";
import GeneralInput from "../__CORE__/components/GeneralInput";

export default (p: AuthInfoProps) => {
    let [errMsg, setErrMsg] = React.useState<string[]>([])
    let [vcodeFactor, onVCodeFactor] = useState(0)
    let [phoneNumber, onPhoneNumber] = useState<string>(p.authInfo.user?.phoneNumber || '')
    let inner = (

        <form className="space-y-2">
            <AlertErrorPanel errorMsg={errMsg}></AlertErrorPanel>
            <PhoneInput onChange={e => {
                onPhoneNumber(e)
            }} name={"phoneNumber"} defaultValue={phoneNumber}></PhoneInput>
            <GeneralInput label={Dot("9YPgsPid2M", "SMS Code")} ph={Dot("Md1JbKBRx", "Enter six-digits SMS Code")} fn_svgJSX={
                (clz: string) =>
                (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={clz}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                )
            } name='msgCode' ></GeneralInput>
            <div className='space-y-2 mt-2 space-x-2 '>
                <button type="button" className="py-2 px-2 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-solarized-blueLight text-white hover:bg-solarized-blue   disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    {Dot("PbNcddi", "Activate Account")}
                </button>
                <button type="button" className="py-2 px-2 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-gray-500 text-gray-500 hover:border-gray-800 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-400 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    {Dot("uedfFV1", "Resend Code")}
                </button>
            </div>
        </form>

    )
    return <div className='space-y-2 flex-1'><LoadingWrapper>
        <CardPanel className='p-8 py-8'>
            <div className=' '>
                <div className='text-xl mb-4 font-bold'>
                    {Dot("yMOBkjIbRtB", "Last step to ELB3 Community")}
                </div>
                <div className='space-y-2 text-xs'>
                    <div>
                        {Dot("5ANr-yPVdi", "Hello, {0}. We need to verify your telephone number to activate your account, it will not take too long.", p.authInfo.user?.userAcctId)}
                        {Dot("9gWsZxYEN", "We have sent an activation code to your phone, please check it and input below. If you did not receive any message on your phone, you can click the resend button to get a new one.")}
                    </div>

                </div>
                <div className='space-y-2 space-x-2 max-w-md mt-8 '>
                    {inner}
                </div>
            </div>
        </CardPanel> </LoadingWrapper>
    </div>
}