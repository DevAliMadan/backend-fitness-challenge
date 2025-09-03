const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const logger = require('morgan')
const cors = require('cors')

//  routes here

const authRoutes = require('./routes/authRoutes')
//

dotenv.config()
const app = express()


mongoose.connect(process.env.DB_URI)
mongoose.connection.on('connected', ()=>{
    console.log('connected to mongoDB')
})

app.use(express.json())
app.use(logger('dev'))
app.use('/auth', authRoutes)

app.listen(3000, () => {
    console.log('App is listening!')
})