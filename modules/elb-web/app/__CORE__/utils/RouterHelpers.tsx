import { getXLocaleStrInRSC } from "./TranslationUtils"

export let formatURL = (str: string): string => {
    let xlocale = getXLocaleStrInRSC()
    return xlocale + str
}