// routes/users.js
const express = require('express');
const router = express.Router();

//database connection
const mongoose = require("mongoose");
const connectToDatabase = require('./../db');

router.get('/signup', (req, res) => {
    res.send('user signup');
})

router.post('/signup', (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    res.status(200).json({massage: "user created", newUser});
})

router.get('/login', (req, res) => {
    res.send('user login');
})

router.post('/login', (req, res) => {
    const {newUser} = req.body;
    console.log(newUser);
})



router.get('/:id/profile', (req, res) => {
    res.send('user profile');
})


module.exports = router;
