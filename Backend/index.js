const app = require("./app");
const dotenv=require('dotenv')
const mongoose=require('mongoose');
const dbConnection = require("./utils/db");
dotenv.config()


//server
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
    dbConnection()
})