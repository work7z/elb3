import os from 'os'
import path from 'path';
import fileSystem from 'fs'
import { readFileSync } from 'fs';

export const dynamic = 'force-dynamic' // defaults to auto


export let getImgBase64 = (): any => {
  let random = Math.floor(Math.random() * 10)
  let elb3Root = process.env["ELB3_ROOT"] || ''
  let file = path.join(elb3Root, 'precompiled', 'dev', `${random}.png`)
  let b = readFileSync(file)
  // return "data:image/png;base64," + b
  return b
}

export async function GET(request: Request,response:Response) {
  
  return new Response(getImgBase64(),{
    headers: {
      "content-type": "image/png"
    }
  })
}