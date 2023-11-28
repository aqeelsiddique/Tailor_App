const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('../db/conn');
const mesaurements = require("../controller/measurments");
const multer = require("multer");




  
let storage = multer.diskStorage({
    destination: "./public/images", // Directory (folder) setting
    filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname); // File name setting
    },
  });

  var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/jpeg" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/png" 
       
      
      ) {
        cb(null, true);
      } else {
        cb(new Error("Only JPEG, JPG, and PNG files are allowed"));
      }
    },
  });




router.get('/test' , (req, res) =>{

    res.cookie("test", 'aqeel')
    res.send('heel0 word from the server router js')
});
/////////////////////////////////////////////////Measurements Route Endpoint


router.post('/productadd', upload.single('productimg'),  mesaurements.createProduct )

router.put("/productedit/:id", upload.single("productimg"), mesaurements.updateproduct);

router.get("/productdel/:id", mesaurements.productdelete )

router.get('/products', mesaurements.getProducts);






module.exports= router