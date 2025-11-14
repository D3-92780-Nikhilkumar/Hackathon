const express = require('express')



const pool = require('../utils/db')
//const config = require('../utils/config')
const result = require('../utils/result')

const router = express.Router()

router.get('/', (req, res) => {
    const sql = `SELECT * FROM movies`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})


// router.delete('/:id', (req, res) => {
//     const uid = req.params.id
//     const sql = `DELETE FROM users WHERE uid = ${uid}`
//     // console.log(sql)
//     pool.query(sql, (error, data) => {
//         res.send(result.createResult(error, data))
//     })
// })

router.get('/:id', (req, res) => {
    const id = req.params.id
    const sql = `select * from movies WHERE id = ${id}`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})





module.exports = router