const express= require('express')
const mongoose= require('mongoose')
const colors= require('colors')
const dotenv= require('dotenv')
const morgan= require('morgan')
const helmet= require('helmet')
const cors= require('cors')

const Database= require('./config/db')
const {notFound, errorHandler}= require('./middewares/errorHandlers')
const userRoutes= require('./routes/userRoutes')
const postRoutes= require('./routes/postRoutes')

const app= express()
dotenv.config()




//middlewares
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)
app.use('/profile', express.static('uploads/profile'))
app.use('/post', express.static('uploads/images'))

Database()

app.use(errorHandler)
app.use(notFound)

const PORT= process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`SERVER UP AND RUNNING: ${PORT}`.green.bold))