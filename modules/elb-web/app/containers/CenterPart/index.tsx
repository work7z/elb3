import { getPureWebsiteName } from "@/app/common/config"
import { Dot } from "@/app/utils/TranslationUtils"

export default (props: { children: JSX.Element }) => {
    return <div className="min-h-screen bg-slate-100 w-full shadow-inner shadow-slate-200 pb-24">
        <div className="app-minmax-size mx-auto p-4">
            {props.children}
        </div>
    </div>
}