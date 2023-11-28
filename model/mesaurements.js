const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const crypto = require('crypto');
///schema represent documenet mtlb ju hum database data save krthy hae wu humy kis tara chaiyae hothy us liyae used krthy hae
const userShema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description : {
        type: String,
        require: true

    },
    
    
    image: {
        type: String,
        // require: true
       
    },
   
}, { timestamps: true }


)

const User = mongoose.model('Tailor', userShema )
module.exports= User;