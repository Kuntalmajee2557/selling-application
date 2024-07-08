//express setup
import express from "express";
const app = express();


import bodyParser from 'body-parser'; 
app.use(bodyParser.json()); // req.body

import methodOverride from 'method-override';
app.use(methodOverride('_method'));

const port = 8080;

import userRoute from "./routes/userRoute.js"
import sellerRoute from "./routes/sellerRoute.js";

//models 
import User from "./models/userModel.js"
import Seller from "./models/sellerModel.js"
import Course from "./models/courseModel.js"


//define path
import path from "path";

//to connect database
import mongoose from 'mongoose';
import connectToDatabase from './db.js';


app.use('/user', userRoute);
app.use('/seller', sellerRoute);

app.get("/course", async(req, res) => {
    try{
        const allCourse = await Course.find();

        res.status(200).json(allCourse);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }

})

app.get('/', (req, res) => {
    res.send('hii');
})

//database connection
app.use(connectToDatabase);



app.listen(port, () => {
    console.log(`listing the port ${port}`)
})