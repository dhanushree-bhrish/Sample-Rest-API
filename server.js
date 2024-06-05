const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
const PORT = 4000;

app.get('/', (req,res) =>{
    console.log('Sample Rest API');
    res.json({message:'This is a sample rest api'});
})

app.listen(PORT, ()=>{
    console.log(`listening to port : ${PORT}`);
})