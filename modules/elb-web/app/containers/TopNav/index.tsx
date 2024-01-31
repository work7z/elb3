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
    return (
        <div className="border-b-2" >
            <div className="flex items-center justify-between flex-wrap p-4 border-b-slate-300 mx-auto app-minmax-size" style={{
            }}>
                <div className="flex items-center flex-shrink-0 mr-6">
                    {/* <img src="/icon5-long.png" alt="logo" className="fill-current h-8 w-22 mr-2" /> */}
                    <span className="font-semibold text-xl tracking-tight">{getPureWebsiteName()}</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <input
                            type="search"
                            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                            placeholder={Dot("_ncx4GSft", "Search Topics")}>
                        </input>
                    </div>
                    <div>
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0 dark:text-gray-200 dark:hover:text-gray-400 dark:hover:bg-gray-700">Login</a>
                        {/* Register and language switch buttons go here */}
                    </div>
                </div>
            </div>
        </div>
    )
}