const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const logger = require('morgan')
const cors = require('cors')

//  routes here

const authRoutes = require('./routes/authRoutes')
const challengeRoutes = require('./routes/challengeRoutes')
const goalRoutes = require('./routes/goalRoutes')

//

dotenv.config()
const app = express()


mongoose.connect(process.env.DB_URI)
mongoose.connection.on('connected', ()=>{
    console.log('connected to mongoDB')
})

app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json())
app.use(logger('dev'))
// routes
app.use('/auth', authRoutes)
app.use('/challenge', challengeRoutes)
app.use('/goal', goalRoutes)

const port = process.env.PORT

app.listen(port, () => {
    console.log('App is listening on port ' + port)
})