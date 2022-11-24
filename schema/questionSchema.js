const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    qname:{
        type:'String',
        unique:true,
        required:true
    },
    option:{
        type:'Array',
        required:'true'
    },
    answer:{
        type:'String'
    }
})

const Questions = new mongoose.Schema({
    name:{
        type:'String',
        unique:true,
        required:true
    },
    title:{
        type:'String',
        unique:true,
        required:true
    },
    Questions:[QuestionSchema]
})

const model  =  mongoose.model('questions',Questions)

module.exports = model