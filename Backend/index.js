import express from 'express'
import noteRoutes from './Router/noteRoutes.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();
const app=express();
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))


app.use("/api/notes",noteRoutes)
// app.get("/api/notes",(req,res)=>{
//     res.send("you got 5 notes")
// })
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is started at port:${PORT}`);
})