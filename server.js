const express = require('express')
const app = express()
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const Questions = require('./schema/questionSchema')
const cors = require('cors')
const dotenv = require('dotenv').config()

mongoose.connect('mongodb+srv://Akash:akash@cluster0.jncqfyz.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
console.log("mongoose connected")
const PORT = process.env.PORT || 5000
app.listen(PORT,(req,res)=>{
    console.log('im listening wih server')
})

app.use(bodyParser.json())
app.use(cors())
app.post('/data',async(req,res)=>{
    console.log(req.body)
    const newPost = new Questions(req.body)
    console.log(newPost)
     try {
        const savedPost = await newPost.save();
       return res.status(200).json(savedPost)
    } catch (error) {
        return res.status(500).json(error)        
    }
})

app.get('/',async(req,res)=>{
     const response = await Questions.find()
     console.log(response)
     return res.json(response)
})

app.post('/put',async(req,res)=>{
    const title = req.body.title
    const response = await Questions.find({title:title})
    console.log(response)
    return res.json(response)
})