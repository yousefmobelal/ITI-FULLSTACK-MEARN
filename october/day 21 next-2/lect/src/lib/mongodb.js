//? connect
import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/next_crud"
if(!MONGODB_URI){
    throw new Error("please define MONGODB_URI inside environment variables")

}

let isConnected = false;
async function dbConnect() {
    if(isConnected) return;
    try{
        const db = await mongoose.connect(MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
      isConnected = db.connections[0].readyState
      console.log("MongoDB connected");
    }catch(error){
        console.error("Connection Error",error)
        throw error
    }
    
}

export default dbConnect;