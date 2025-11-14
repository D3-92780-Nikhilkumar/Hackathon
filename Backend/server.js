const express = require('express')
//const userRouter = require('./routes/user')
// const productRouter = require('./routes/product')
const moviesRouter = require("./routes/movies")
const reviewRouter = require("./routes/review")

const app = express()

// Middleware
app.use(express.json())
// app.use('/user', userRouter)
// app.use('/product', productRouter)
app.use('/movies', moviesRouter)
app.use('/review', reviewRouter)


app.listen(4000, 'localhost', () => {
    console.log('server started at port 4000')
    // hiiiiiiiiiiiiiii
})