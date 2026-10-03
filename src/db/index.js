import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import express from "express";
const app = express();

// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error", ()=>{
//             console.log("error:");
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch(error){
//         console.error("ERROR :", error)
//         throw err
//     }
// })()

const connectDB = async () => {
  try {
    const connectionIstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB host: ${connectionIstance.connection.host}`
    );
  } catch (error) {
    console.log("monodb connection error: ", error);
    process.exit(1);
  }
};

export default connectDB;
