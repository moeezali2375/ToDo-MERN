const express=require("express");
const connectDB=require("./config/db");
const todoRoutes=require("./routes/todo");

require("dotenv").config();

const app=express();
const PORT=process.env.PORT
// connectDB();

//! Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//! Routes
app.use("/todo",todoRoutes);

app.get("*",async (req,res)=>{
    res.redirect("/todo");
})

app.listen(PORT,()=>{
    console.log(`Server started on Port: ${PORT}`)
})