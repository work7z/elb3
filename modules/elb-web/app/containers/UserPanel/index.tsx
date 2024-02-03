import { Dot } from "@/app/utils/TranslationUtils"

let EachInfoCell = (props: { href?: string, className?: string, name: string, content: any }) => {
    return <a href={props.href || 'javascript:void(0);'} className={"w-full h-full   space-x-1 text-sm text-gray-400  flex flex-col text-center items-center justify-center hover:bg-zinc-50 transition-all duration-300 pt-2 pb-2 " + ' ' + props.className}>
        <div className="text-base mb-1 text-gray-500 font-medium ">{props.name}</div>
        <div className="font-light">{props.content}</div>
    </a>

}

export default () => {
    return <div className="p-2">
        <div className="flex ">
            <div className="w-12 h-12 rounded bg-zinc-300 text-xl flex justify-center items-center text-gray font-bold "></div>
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

        <div className='flex flex-row '>
            <a>b1</a>
            <a>b2</a>
            <a>b3 还在开发中</a>
        </div>
    </div>
}