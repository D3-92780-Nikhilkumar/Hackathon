const express = require('express')
const pool = require('../utils/db')

const result = require('../utils/result')

const router = express.Router()


router.post('/', (req, res) => {
    const { id, movie_id, review, rating, user_id, modified } = req.body;

    const sql = `
        INSERT INTO reviews (id, movie_id, review, rating, user_id, modified)
        VALUES (?, ?, ?, ?, ?, ?)`; // Use placeholders (?) instead of template literals

   
    pool.query(sql, [id, movie_id, review, rating, user_id, modified], (error, data) => {
      
        res.send(result.createResult(error, data))

    });
});

router.get('/:id', (req, res) => {
    const movie_id = req.params.id
    const sql = `select * from reviews WHERE movie_id  = ${movie_id}`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.delete('/:id', (req, res) => {
    const user_id = req.params.id
    const sql = `DELETE FROM reviews WHERE user_id = ${user_id}`
    // console.log(sql)
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})
router.put('/', (req, res) => {
    const { user_id ,  movie_id , review  } = req.body
    const sql = `UPDATE reviews SET review = '${review}'  WHERE user_id = ${user_id} and movie_id=${ movie_id} `
    console.log(sql)
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })  
})

router.get('/', (req, res) => {
    const sql = `SELECT * FROM reviews`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.get('/myreview/:id', (req, res) => {
    const user_id = req.params.id
    const sql = `select * from reviews WHERE user_id  = ${user_id}`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

module.exports = router