let mysql = require('mysql');
const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("reactnode", "root", "", {
    host: 'localhost',
    dialect: 'mysql',
    operatorAliases: false,

    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle:10000
    }
}) 

db.Sequelize = Sequelize
db.sequelize = sequelize



module.exports = db
