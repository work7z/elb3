import { Sequelize, DataTypes } from 'sequelize';


const sequelize = new Sequelize('sqlite::memory:')

const User = sequelize.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
});

export let connect = async function () {

    // connnect to database
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    const jane = await User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20),
    });

    const users = await User.findAll();

    return users;
}