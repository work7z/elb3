const { Sequelize } = require('sequelize');

export let connect = async function () {
    const sequelize = new Sequelize('sqlite::memory:')

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}