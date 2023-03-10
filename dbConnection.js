

const mongoose=require ('mongoose')
require('dotenv').config();
const connectDB= async()=>{
    try{
      console.log(process.env.DB_PASSWORD);
    await mongoose.connect(`mongodb+srv://emnabgeudriya:${process.env.DB_PASSWORD}@cluster0.ophtgb9.mongodb.net/test`);
    console.log('db connected!')
    

    }
    catch (error){
      console.log(error)
    }
    }

    module.exports=connectDB