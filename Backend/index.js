import express from 'express';
import noteRoutes from './Router/noteRoutes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from "path";

dotenv.config();
const app=express();

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

app.use(express.json())
const __dirname = path.resolve();
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use("/api/notes",noteRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is started at port:${PORT}`);
})