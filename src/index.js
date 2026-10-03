import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env",
});


connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(` SERVER IS RUNNING ON PORT : ${process.env.PORT}`);
    } )
})
.catch((error) =>{
    console.log("MONGODB CONNECTION FAILED!!!:", error);
})