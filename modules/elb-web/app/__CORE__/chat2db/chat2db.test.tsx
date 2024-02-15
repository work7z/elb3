import fs from "fs";
import path from "path";
import loadDAO, { } from "../dao";
import { User } from "../dao/model";
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataTypes, Model } from 'sequelize'
import { isTestEnv, markEnvAsDevForcibly } from "../hooks/env";


test('chat2RAWdb', async () => {
  markEnvAsDevForcibly()
  if (isTestEnv()) {
    console.log('ignore test env')
    return;
  }
  markEnvAsDevForcibly()
  let dir = "C:\\Users\\jerrylai\\hmproject\\elb3-wechat\\聊天记录";
  let daoRef = await loadDAO();
  let groupFolders = fs.readdirSync(dir)
  for (let eachGroupFolder of groupFolders) {
    let csvFile = path.join(dir, eachGroupFolder, `${eachGroupFolder}_utf8.csv`)
    console.log(csvFile)
    // get file length
    let fileStat = fs.statSync(csvFile)
    console.log(fileStat.size)

  }
})



