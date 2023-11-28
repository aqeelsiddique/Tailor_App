
const  dotenv = require('dotenv');

const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
///import the useshema file
// const mesaurements = require('./router/measurements');
// app variable ju hum ny decalared kiya hae us ky aundar sary express method a gy hae
const app = express();
///Data Base conction
dotenv.config({path:'./config.env'})
const PORT = process.env.PORT;
///connection file requre
require('./db/conn')
///ju b data json mae a us ko convert kr do object
app.use(express.json());
app.use(cors())
///router import
app.use(require('./router/measurements'))

//////midlleware 


// app.use(measurements)
const middleware = (req, res, next) => {
    console.log('Hello my Middleware');
    next();
}
app.get('/test' , (req, res) =>{
    res.send('heel0 word from the server app js')
});


app.listen(PORT, ()=>{
    console.log(`server id running at port no ${PORT}`)
})