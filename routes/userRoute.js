// routes/users.js
import express from 'express';
const router = express.Router();

//database connection
import mongoose from "mongoose";
import connectToDatabase from './../db.js';

import User from'./../models/userModel.js';


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





router.get('/:id/profile', (req, res) => {
    res.send('user profile');
})


export default router;
