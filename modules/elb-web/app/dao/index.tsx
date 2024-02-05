import { Sequelize, DataTypes } from 'sequelize';
import { SystemConfig as SystemConfig } from "../config/types"
import fs from 'fs'
import path from 'path'

class DaoRef {

}

export type SystemFlag = "dev" | "prod" | "test"

export let getConfigByFlag = (envFlag: SystemFlag):SystemConfig => {
    let config = fs.readFileSync(path.join(__dirname,'..','config/'+envFlag+'-config.json'),{encoding:'utf-8'})
    return JSON.parse(config) as SystemConfig
}


export default async (envFlag: SystemFlag): Promise<DaoRef> => {
    let config = getConfigByFlag(envFlag)

    let sequelize = new Sequelize(`${config.database.link}`);

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }



    return {}
}