const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/emp')
var app = express()

app.get('/',function(req,res){
    res.send('hello world')
})
app.use('/emp',router)

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})

app.listen(8000,function(){
    console.log('Server is Up')
})