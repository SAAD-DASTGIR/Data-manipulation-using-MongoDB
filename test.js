const mongoose = require('mongoose')

const connect=()=>{
    return
        mongoose.connect('mongodb://localhost:27107/saad')}
const student= new mongoose.Schema({
    firstname:String
})
const Student= mongoose.model('student',student)