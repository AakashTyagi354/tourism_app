import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/Users.js"
import hotelsRoute from "./routes/hotels.js"
import roomRoute from "./routes/hotelrooms.js"
const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://book:book@cluster0.tgrzj.mongodb.net/?retryWrites=true&w=majority')
        console.log("connected to mongodb")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("connected", ()=>{
    console.log("mongodb connected")
})


// middle ware

app.use(express.json())

app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/hotels", hotelsRoute)
app.use("/hotelrooms", roomRoute)





app.listen(8800, () => {
    connect();
    console.log("conneted to backend")
})