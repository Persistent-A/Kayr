const express = require('express')
// console.log(express)
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const colors = require('colors')
const errorHandler = require('./middlewares/errorHandler')

PORT = process.env.PORT || 5001
connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/users', require('./routes/userRoutes'))


app.use(errorHandler)
app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
