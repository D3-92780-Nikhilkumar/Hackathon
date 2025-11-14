const mysql = require('mysql2')
const pool = mysql.createPool({
    host: "localhost",
    user: "D3_92780_Nikhilkumar",
    password: "manager",
    database: "Hackathon"
})

module.exports = pool