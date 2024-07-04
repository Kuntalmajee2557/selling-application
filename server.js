//express setup
import express from "express";
const app = express();


import bodyParser from 'body-parser'; 
app.use(bodyParser.json()); // req.body

const port = 8080;

import userRoute from "./routes/userRoute.js"
import sellerRoute from "./routes/sellerRoute.js";

//define path
import path from "path";

//to connect database
import mongoose from 'mongoose';
import connectToDatabase from './db.js';


app.use('/user', userRoute);
app.use('/seller', sellerRoute);

app.get('/', (req, res) => {
    res.send('hii');
})

//database connection
app.use(connectToDatabase);

app.listen(port, () => {
    console.log(`listing the port ${port}`)
})