import CardPanel from "../../components/CardPanel"
import { Dot } from "../../utils/TranslationUtils"
import MoonSunControl from "../UserPanel/MoonSunControl"

export default () => {
    return <div className="space-y-2 ">
        <CardPanel children={<div className='p-2'>
            <h1 className='text-lg font-semibold'>{Dot("Wpdsp3g5U", "Welcome to {0} Community!", "ELB3")}</h1>
            <div className='text-sm'>
                <p dangerouslySetInnerHTML={{
                    __html: Dot("IcvP2d-QY", "Please {0} or {1} to join the discussion", `<a href='/login' class='anchor-text'>${Dot("CQ44pYZYj", "login")}</a>`, `<a class='anchor-text' href='/register' >${Dot("DYaOL4Yp7", "register")}</a>`)
                }}>
                </p>
            </div>
        </div>}>
        </CardPanel>

        <CardPanel className="mt-2" children={<div className='p-2 flex flex-row justify-between items-center'>
            <div>{Dot("23o9bKU4N", "Page Settings")}</div>
            <MoonSunControl></MoonSunControl>
        </div>}>
        </CardPanel>
    </div>
}