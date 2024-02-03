import { COMMON_CLZ_ANCHOR_TEXT } from "@/app/common/clz"
import RegularLink from "@/app/components/RegularLink"
import { MoonIcon, Cog8ToothIcon, SunIcon } from '@heroicons/react/24/solid'

import { Dot } from "@/app/utils/TranslationUtils"
import { CombindSearchProps } from "@/app/page"
import MoonSunControl from "./MoonSunControl"


let EachInfoCell = (props: { href?: string, className?: string, name: string, content: any }) => {
    return <a href={props.href || 'javascript:void(0);'} className={"w-full h-full   space-x-1 text-sm text-gray-400  flex flex-col text-center items-center justify-center hover:bg-zinc-50 transition-all duration-300 pt-2 pb-2 " + ' ' + props.className}>
        <div className="text-base mb-1 text-gray-500 font-medium ">{props.name}</div>
        <div className="font-light">{props.content}</div>
    </a>
}

export default (props: CombindSearchProps) => {
    // let notificationCtn = 3;
    let notificationCtn = 0;
    return <div className="p-2">
        <div className="flex ">
            <div className="w-12 h-12 rounded bg-zinc-300  text-xl flex justify-center items-center text-gray font-bold "></div>
            <div className="flex-shrink flex-1 ml-2">
                <div>
                    <a href="/" className="text-gray-800 hover:underline font-bold">Min</a>
                </div>
                <div className="text-sm text-gray-600 mt-[-1px]">{Dot("hxCMxpW6Sq", "Joined {0} days ago", 530)}</div>
            </div>
        </div>
        <hr className="mt-2"></hr>
        {/* border-gray-200 border-r-[1px] border-l-[1px]  */}
        <div className="flex flex-row  justify-around">
            <EachInfoCell className="border-gray-200 border-r-[1px]" name={Dot("BqWGnXEzV", "City")} content={
                '广州'
            } />
            <EachInfoCell className="border-gray-200 border-r-[1px]" name={Dot("jdbef_PBl", "Goal")} content={
                'PETS3'
            } />
            <EachInfoCell name={Dot("Y0drdCSiu", "Topics")} content={
                30
            } />
        </div>
        <hr className=" mb-2"></hr>
        <div className='flex flex-row  justify-between items-center '>
            <div className="flex">
                {
                    true ?
                        <img src={notificationCtn != 0 ? "/controls/email.png" : "/controls/city.png"} className={"w-5 mr-2 " + (
                            notificationCtn != 0 ? "" : " opacity-70 "
                        )}></img> : ''
                }
                <RegularLink href={'/notifications'} children={<span className={COMMON_CLZ_ANCHOR_TEXT}>{Dot("2RbUh6TyJ", "{0} Unread Notifications", notificationCtn)}</span>}>
                </RegularLink>
            </div>
            <div className="flex space-x-1">
                <MoonSunControl></MoonSunControl>
                <RegularLink href="/xksd" children={(
                    <Cog8ToothIcon className="h-5 w-5 text-zinc-400 "></Cog8ToothIcon>
                )}></RegularLink>
            </div>
        </div>

    </div>
}

