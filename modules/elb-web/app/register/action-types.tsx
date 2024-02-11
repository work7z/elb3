'use server'

export type AsyncCreateResponse = {
    message?: string,
    error?: string,
    warning?: string
}

export type CheckRules = {
    type: "non-empty" | "valid-email" | "check-fn",
    name: string,
    validateFn?: (val: string) => any,
    message?: string
}

export let validateEachRuleInArr = (rules: CheckRules[], formData: any): AsyncCreateResponse | null => {
    let valid = true;
    let lastMsg = ''
    for (let rule of rules) {
        lastMsg = rule.message || 'no message'
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
            let result = rule.validateFn(formData[rule.name])
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
