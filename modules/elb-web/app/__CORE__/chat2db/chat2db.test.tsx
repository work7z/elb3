import fs from "fs";
import path from "path";
import loadDAO, { } from "../dao";
import { RawFTSChatroom, RawGroupHistory, RawWXContact, User } from "../dao/model";
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataTypes, Model } from 'sequelize'
import { isTestEnv, markEnvAsDevForcibly } from "../hooks/env";
import * as csv from 'fast-csv';
import _ from "lodash";

test('chat2RAWdb2', async () => {
  try {
    markEnvAsDevForcibly()
    if (isTestEnv()) {
      console.log('ignore test env')
      return;
    }
    markEnvAsDevForcibly()
    let dir = "C:\\Users\\jerrylai\\hmproject\\elb3-wechat\\聊天记录";
    let ftsChatroomtJSON = path.join(dir, '..', 'FTSChatroom.json')
    let wxContactJSON = path.join(dir, '..', 'WXContact.json')
    let ftsRecords: RawFTSChatroom[] = JSON.parse(fs.readFileSync(ftsChatroomtJSON, 'utf8').toString())
    let wxContacts: RawWXContact[] = JSON.parse(fs.readFileSync(wxContactJSON, 'utf8').toString())
    let daoRef = await loadDAO();
    console.log(daoRef.db)
    let groupKey = '20240215'
    let groupFolders = fs.readdirSync(dir)
    await RawGroupHistory.truncate({ force: true })
    await RawFTSChatroom.truncate({ force: true })
    await RawWXContact.truncate({ force: true })
    // fts records
    for (let eachRecord of ftsRecords) {
      let m = await RawFTSChatroom.create({
        ...eachRecord,
        groupKey: groupKey
      })
      console.log(m)
    }
    // raw wx contacts
    for (let eachContact of wxContacts) {
      let m = await RawWXContact.create({
        ...eachContact,
        groupKey: groupKey
      })
      console.log(m)
    }
    // group folders
    for (let eachGroupFolderName of groupFolders) {
      let csvFile = path.join(dir, eachGroupFolderName, `${eachGroupFolderName}_utf8.csv`)
      console.log(csvFile)
      // get file length
      let fileStat = fs.statSync(csvFile)
      console.log(fileStat.size)
      let groupName = eachGroupFolderName
      // csv reader
      let allRows: any[] = []
      await new Promise((r, e) => {
        fs.createReadStream(csvFile)
          .pipe(csv.parse({ headers: true }))
          .on('error', error => {
            console.error(error)
            e(error)
          })
          .on('data', row => {
            allRows.push(row)
          })
          .on('end', (rowCount: number) => {
            console.log(`Parsed ${rowCount} rows`)
            r(1)
          });
      })
      for (let eachRow of allRows) {
        let formatRow = {}
        _.forEach(eachRow, (x, d, n) => {
          formatRow[_.trim(_.lowerFirst(d))] = x;
        })
        let m = await RawGroupHistory.create({
          groupKey,
          groupName,
          ...formatRow as any,
        } as any)
        console.log(m)
      }
    }
  } catch (e) {
    console.log(e)
    throw e;
  }
}, { timeout: 1000000 * 99 })



