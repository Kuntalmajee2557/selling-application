//express setup
const express = require("express");
const app = express();


const path = require("path");

const mongoose = require("mongoose");
const connectToDatabase = require('./db');

const userRoute = require("./routes/userRoute.js");
const sellerRoute = require("./routes/sellerRoute.js");


const port = 8080;


app.use('/user', userRoute);
app.use('/seller', sellerRoute);



app.get('/', (req, res) => {
    res.send('hii');
})


app.use(connectToDatabase);


app.listen(port, () => {
    console.log(`listing the port ${port}`)
})