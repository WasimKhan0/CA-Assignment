const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");

const getDataRouter = require("./Route");
//Middleware
app.use(cors({origin: process.env.url}));
app.use(express.json());


app.use("/api",getDataRouter);

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})







