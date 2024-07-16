const Sequelize = require('sequelize');
const config = require('../config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    define: {
        timestamps: false,
    },
    dialect: config.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.account = require('./account')(sequelize, Sequelize);

module.exports = db;
