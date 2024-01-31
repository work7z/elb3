import { Dot } from "../utils/TranslationUtils"

export const getWebsiteName = (subPage?: string) => {
    let str = Dot("UED59zbd-", "ELB3 Community", "elb3")
    if (!subPage) {
        subPage = Dot("OBjaZqTvx", "Home")
    }
    if (subPage) {
        return `${subPage} - ${str}`
    }
    return str
}