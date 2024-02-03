import { getPureWebsiteName } from "@/app/common/config"
import { Dot } from "@/app/utils/TranslationUtils"

export default (props: { children: JSX.Element }) => {
    return <div className="min-h-screen dark:bg-solarized-base02 bg-slate-100 w-full shadow-inner dark:shadow-solarized-base00 dark:shadow-none  shadow-slate-200  pb-24">
        <div className="app-minmax-size mx-auto p-4">
            {props.children}
        </div>
    </div>
}