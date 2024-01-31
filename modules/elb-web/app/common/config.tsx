import { Dot } from "../utils/TranslationUtils"

export const getPureWebsiteName = () => {
    return Dot("UED59zbd-", "ELB3 Community", "elb3")
}

export const getWebsiteName = (subPage?: string) => {
    let str = getPureWebsiteName()
    if (!subPage) {
        subPage = Dot("OBjaZqTvx", "Home")
    }
    if (subPage) {
        return `${subPage} - ${str}`
    }
    return str
}