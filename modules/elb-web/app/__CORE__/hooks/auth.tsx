import os from 'os'
import path from 'path';
import { readFileSync } from 'fs';

export let getImgBase64 = (): string => {
    
    let random = Math.floor(Math.random() * 10)
    let elb3Root = process.env["ELB3_ROOT"] || ''
    let file = path.join(elb3Root, 'precompiled', 'dev', `${random}.png`)
    let b = readFileSync(file, 'base64')
    return "data:image/png;base64," + b
}