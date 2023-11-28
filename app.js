
// const  dotenv = require('dotenv');

// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require("cors");
// ///import the useshema file
// // const mesaurements = require('./router/measurements');
// // app variable ju hum ny decalared kiya hae us ky aundar sary express method a gy hae
// const app = express();
// ///Data Base conction
// dotenv.config({path:'./config.env'})
// const PORT = process.env.PORT;
// ///connection file requre
// require('./db/conn')
// ///ju b data json mae a us ko convert kr do object
// app.use(express.json());
// app.use(cors())
// ///router import
// app.use(require('./router/measurements'))

// //////midlleware 


// // app.use(measurements)
// const middleware = (req, res, next) => {
//     console.log('Hello my Middleware');
//     next();
// }
// app.get('/test' , (req, res) =>{
//     res.send('heel0 word from the server app js')
// });


// app.listen(PORT, ()=>{
//     console.log(`server id running at port no ${PORT}`)
// })




const  dotenv = require('dotenv');
var bodyParser = require('body-parser');

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


const db =
  process.env.MONGODB_URI ||
  'mongodb+srv://Aqeel:aqeel12345@cluster0.uhg7y9z.mongodb.net/tailorapp?retryWrites=true&w=majority';

// Add this line to set 'strictQuery' to false before connecting
// mongoose.set('strictQuery', false);
// Connect to MongoDB instance
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully.'))
  .catch((err) => console.log('MongoDB connection error: ' + err)); 
// app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Endpoints
const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Server started on port: ${port}`));

