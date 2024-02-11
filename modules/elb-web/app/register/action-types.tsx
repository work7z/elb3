'use server'

export type AsyncCreateResponse = {
    message?: string,
    error?: string,
    warning?: string
}

export type CheckRules = {
    type: "non-empty" | "valid-email" | "check-fn",
    name: string,
    validateFn?: (val: string) => Promise<any>,
    label?: string
}

export let validateEachRuleInArr = async (rules: CheckRules[], formData: any): Promise<AsyncCreateResponse | null> => {
    let valid = true;
    let lastMsg = ''
    for (let rule of rules) {
        lastMsg = rule.label || 'no message'
        if (rule.type === "non-empty") {
            if (!formData[rule.name]) {
                valid = false;
                break;
            }
        }
        if (rule.type === "valid-email") {
            if (!formData[rule.name].includes("@")) {
                valid = false;
                break;
            }
        }
        if (rule.type === "check-fn" && rule.validateFn) {
            let result = await rule.validateFn(formData[rule.name])
            if (result) {
                valid = false;
                break;
            }
        }
    }
    if (valid) return null;
    return {
        error: lastMsg || "invalid form data"
    }
}
