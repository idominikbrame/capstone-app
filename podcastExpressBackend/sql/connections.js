const mysql = require('mysql')
const env = require('dotenv').config()

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env["MASTER_USERNAME"],
    password: process.env["MASTER_PASSWORD"],
    database: process.env["DATABASE"]
})

module.exports = pool