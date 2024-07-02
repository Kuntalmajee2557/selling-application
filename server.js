//express setup
const express = require("express");
const app = express();

const path = require("path");

const mongoose = require("mongoose");
const connectToDatabase = require('./db')

const port = 8080;


app.use(connectToDatabase);

app.listen(port, () => {
    console.log(`listing the port ${port}`)
})