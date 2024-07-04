//express setup
const express = require("express");
const app = express();

const port = 8080;

const userRoute = require("./routes/userRoute.js");
const sellerRoute = require("./routes/sellerRoute.js");

//define path
const path = require("path");

//to connect database
const mongoose = require("mongoose");
const connectToDatabase = require('./db');

app.use(express.json());
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body

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