require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')

//starting express app
const app = express()

//to use json data
app.use(express.json())

//middleware
app.use((req,res,next)=>{
    console.log("middleware")
    next();
})

//routes
app.use('/api/workouts',workoutRoutes)

//connect to database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('connected to database , listening on port 4000')
}) 
})
.catch((error)=>{
    console.log(error)
})
