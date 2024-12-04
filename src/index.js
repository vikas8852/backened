//require('dotnev').cofig({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`server is running at port :${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB db connecttion failed!!",err);
})













// import mongoose from "moongoose";
// import {DB_NAME} from "./constants"
// import express from "express"











 //2nd Apporach

/*
const app=express();
(async ()=>{
    try{
      await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      app.on("error",(error)=>{
        console.log("ERROR ",err);
        throw error
      })
      app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port $ {process.env.PORT}`);
      })
    } catch(error){
        console.log("Error ",error)
        throw err
    }
})()
    */