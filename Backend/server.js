import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoute from './routes/user.js'
import cookieParser from 'cookie-parser';

//.env path config
dotenv.config();
// application express
const app =express();
const PORT = process.env.PORT || 9000;

app.use(cookieParser());
//mongo db connection
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB);
    }catch(error){
        handleError(error);
    }
}
mongoose.connection.on("dissconnected",()=>{
    console.log("MongoDb disconnected")
})
mongoose.connection.on("connected",()=>{
    console.log("Mongodb connected")
})

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("application workin on server ")
})
//middleware for errors handeling
app.use((error,req,res,next)=>{
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something went wrong"

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack :error.stack,
    });
})

app.use('/Booking/user', userRoute);


app.listen(PORT, ()=>{
    connect();
    console.log(`backend server app is running on server http://localhost:${PORT}`)
})