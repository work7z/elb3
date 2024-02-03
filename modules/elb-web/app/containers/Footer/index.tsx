import { Dot } from "@/app/utils/TranslationUtils";
import React from "react";

export default () => {
    let linksArr: { name: string, href: string }[] = [
        { name: Dot("Cz_qjjFw7", "About {0}", "ELB3"), href: "/about" },
        { name: Dot("CK5NCw519", "Community Story", "ELB3"), href: "/about" },
        { name: Dot("RjdigcxfV", "Contact us"), href: "mailto:work7z@outlook.com" },
        { name: Dot("IWPP6V-tR", "Source Code"), href: "https://github.com/work7z/elb3" },
        { name: Dot("Zbl4s7WTp", "Terms of Services"), href: "/terms" },
    ]
    return <div className="app-minmax-size mx-auto p-2 py-6 space-y-2 font-sm">
        <div className="space-x-4 text-sm  text-slate-600">
            {
                linksArr.map((link, i) => {
                    return <a target="_blank" key={i} href={link.href} className=" font-semibold text-slate-600 ">{link.name}</a>
                })
            }
            <span className="">{Dot("ky6JphiKk", "{0} Online Users", 3012)}</span>
            <span>{Dot("gmK3pKyRI", "{0} Peak Online Count", 1293)}</span>
        </div>
        <div className="text-xs text-slate-500 font-serif">

            ELB3.com is derived from <i>English Learning Base</i> group that was founded on August 1st, 2021.  It is technically built with the FOSS project <a href="https://github.com/work7z/elb3" className="text-slate-600">ELB3</a> which is licensed under AGPL v3.0.
        </div>
        <div className="text-xs">

        </div>
    </div>
}