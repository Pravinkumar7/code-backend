import dotenv from "dotenv"

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config()

connectDB()

.then(()=>{

    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`server is running at http://localhost:${process.env.PORT}`);
        
    })
})


.catch((error)=>{
    console.log("MONGODB connection failed ",error);
    
})
















/*
import express from "express";

const app = express()


( async ()=>{
    try {
        
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",()=>{
        console.log("ERROR: ",error)
        throw error
       })
    
       app.listen(process.env.PORT, ()=>{
          console.log(`server is running at http://localhost:${process.env.PORT}`)
       })


    } catch (error) {
        console.log("ERROR: ",error)
        throw error 
        
    }
})()

*/