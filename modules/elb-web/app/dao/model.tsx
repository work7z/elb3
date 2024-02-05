import { Sequelize, DataTypes, Model, InferCreationAttributes, InferAttributes, CreationOptional } from 'sequelize';
import { SystemConfig as SystemConfig } from "../config/types"
import { DaoRef } from './index'

export type UserRole = "root" | "admin" | "user"


export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: number;
    declare username: string;
    declare email: string;
    declare phoneNumber: string;
    declare source: string;
    declare password: string;
    declare role: UserRole;
    declare status: "normal" | "banned" | "deleted";
    declare topicCount: number; // the number of topics that's sent by this user up to now
    declare banReason: string | null; // the reason why this user is banned
    declare banUntil: Date | null;
    // settings
    declare cityId: string; // city id, from fixed static data in node.js
    declare goal: string; // goal, from fixed static data in node.js

    // timestamps
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

// model for UserToken
export class UserToken extends Model<InferAttributes<UserToken>, InferCreationAttributes<UserToken>> {
    declare id: number;
    declare userId: number;
    declare token: string;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

// model for UserLoginLog
export class UserLoginLog extends Model<InferAttributes<UserLoginLog>, InferCreationAttributes<UserLoginLog>> {
    declare id: number;
    declare userId: number;
    declare loginIp: string;
    declare loginTime: Date;
}

// model for block amongst users
export class Block extends Model<InferAttributes<Block>, InferCreationAttributes<Block>> {
    declare id: number;
    declare userId: number;
    declare blockUserId: number;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

// model for topic, containing title, userid, nodeid
export class Topic extends Model<InferAttributes<Topic>, InferCreationAttributes<Topic>> {
    declare id: number;
    declare title: string; // varchar(120)
    declare userId: number;
    declare nodeId: string; // varchar(15)
    declare viewCount: number;
    declare favouriteCount: number;
    declare commentCount: number;
    declare lastCommenter: number;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

// model for topic content, including topicId, type, content(varchar(200))
export class TopicContent extends Model<InferAttributes<TopicContent>, InferCreationAttributes<TopicContent>> {
    declare id: number;
    declare topicId: number;
    declare publishType: "main" | "append";
    declare renderType: "markdown" | "lexical";
    declare content: string; // varchar(20000)
    declare editTimes: number;
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

// model for topic comments, including topicId, userId, content
export class TopicComment extends Model<InferAttributes<TopicComment>, InferCreationAttributes<TopicComment>> {
    declare id: number;
    declare topicId: number;
    declare userId: number;
    declare content: string; // varchar(20000)
    declare editTimes: number;
    declare agreeCount: number; // agree with this comment, visible
    declare disagreeCount: number; // disagree with this comment, invisible
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}

// model for audit table, can contains history of topic content and topic comment model
export type AuditType = "editTopicContent" | "editTopicComment" | "changeUserName"
export class Audit extends Model<InferAttributes<Audit>, InferCreationAttributes<Audit>> {
    declare id: number;
    declare userId: number;
    declare type: AuditType;
    declare content: string; // varchar(20000)
    declare createdAt: CreationOptional<Date> | null;
    declare updatedAt: CreationOptional<Date> | null;
    declare deleteAt: CreationOptional<Date> | null;
}


export default (daoRef: DaoRef) => {
    let sequelize = daoRef.sequelize
    // options
    sequelize.sync({ alter: true })
    // init model

}