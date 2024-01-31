import { getPureWebsiteName } from "@/app/common/config"
import { Dot } from "@/app/utils/TranslationUtils"

export let TopNav = () => {
    // write a function that returns a component for top nav, written by tailwindcss, which should 
    // 1. has a logo on the left
    // 2. the search bar is placed after logo 
    // 3. the search bar should be able to search for a word or a phrase
    // 4. in the float right part, there should be a login button, a register button, and a language switch button
    // 5. once you're ready, print out the logic code below 
    // 6. MOst important, we should look into its dark class name in tailwindcss also, like dark:
    // bg-gradient-to-t from-gray-200 to-white border dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 dark:border-gray-700
    let links: { name: string, href: string }[] = [
        { name: Dot("UjkOS50wO", "Home"), href: "/" },
        { name: "Min", href: "/min" },
        { name: Dot("TV09-obNr", "Milestone"), href: "/milestone" },
        { name: Dot("geHXwByxy", "Settings"), href: "/contact" },
        { name: Dot("xhxY6iLDH", "Logout"), href: "/contact" },
    ]
    return (
        <div className="border-b-2" >
            <div className="flex items-center justify-between flex-wrap p-4 border-b-slate-300 mx-auto app-minmax-size" style={{
            }}>
                <div className="flex items-center flex-shrink-0 mr-6">
                    <img src="/icon6.png" alt="logo" className="fill-current h-8 w-22 mr-2" />
                    <span className="font-semibold text-xl tracking-tight">{getPureWebsiteName()}</span>
                    <div className="text-sm ml-6">
                        <input
                            type="search"
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                            placeholder={Dot("_ncx4GSft", "Search Topics")}>
                        </input>
                    </div>
                </div>
                <div className="  flex-grow lg:flex lg:items-center lg:w-auto flex justify-end">

                    <div>
                        {links.map(x => {
                            return (
                                <a href={x.href} target="_blank" className="inline-block text-lg px-4 py-2 leading-none ">{x.name}</a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}