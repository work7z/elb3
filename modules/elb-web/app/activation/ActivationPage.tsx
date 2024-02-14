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

export default (p: AuthInfoProps) => {
    let [errMsg, setErrMsg] = React.useState<string[]>([])
    let [vcodeFactor, onVCodeFactor] = useState(0)
    let inner = (

        <form className="space-y-2">
            <AlertErrorPanel errorMsg={errMsg}></AlertErrorPanel>
            <PhoneInput name={"phoneNumber"}></PhoneInput>
        </form>

    )
    return <div className='space-y-2 flex-1'><LoadingWrapper>
        <CardPanel className='p-8 py-8'>
            <div className=' '>
                <div className='text-xl mb-4 font-bold'>
                    {Dot("ywRB", "One more step to ELB3 Community")}
                </div>
                <div className='space-y-2 text-xs'>
                    <div>
                        {Dot("5ANr-yPVdi", "Hello, {0}. We need to verify your telephone number to activate your account, it will not take too long.", p.authInfo.user?.userAcctId)}
                    </div>
                </div>
                <div className='space-y-2 space-x-2 max-w-md mt-8 '>
                    {inner}
                </div>
            </div>
        </CardPanel> </LoadingWrapper>
    </div>
}