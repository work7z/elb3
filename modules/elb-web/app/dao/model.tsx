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
    declare status: string;
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
    declare publishType: "main"|"append";
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
export type AuditType = "topic" | "topicContent" | "topicComment"
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
    // option
    sequelize.sync({ alter: true })


    User.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: new DataTypes.STRING(20),
            allowNull: false,
        },
        email: {
            type: new DataTypes.STRING(20),
            allowNull: true,
        },
        phoneNumber: {
            type: new DataTypes.STRING(18),
            allowNull: true,
        },
        source: {
            type: new DataTypes.STRING(10),
            allowNull: false,
        },
        password: {
            type: new DataTypes.STRING(32),
            allowNull: false,
        },
        role: {
            type: new DataTypes.STRING(6), // replace 'role1', 'role2' with your actual roles
            allowNull: false,
        },
        status: {
            type: new DataTypes.STRING(12),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        deleteAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, {
        sequelize,
    });
}