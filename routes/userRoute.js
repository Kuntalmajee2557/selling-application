// routes/users.js
import express from 'express';
const router = express.Router();

//database connection
import mongoose from "mongoose";
import connectToDatabase from './../db.js';

import User from './../models/userModel.js';

import {jwtAuthMiddleware, generateToken} from "./../jwt.js"

router.get('/signup', (req, res) => {
    res.send('user signup');
})

router.post('/signup', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        //find this username is already exist or not
        const existUser = await User.findOne({ username: data.username });

        if (existUser) {
            return res.status(400).json({ error: "user already exist" });
        }

        const newUser = new User(data);
        const user = await newUser.save().then(user => console.log(user));

        const payload = {
            id: newUser.id
        }

        const token = generateToken(payload);

        res.status(200).json({ massage: "user created", newUser, token: token });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }

})

router.get('/login', (req, res) => {
    res.send('user login');
})

router.post('/login', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        const existUser = await User.findOne({ username: data.username });

        if (!existUser) {
            return res.status(400).json({ error: "user not found! singup first" });
        }

        if(data.password != existUser.password){
            return res.status(400).json({ error: "wrong password" });
        }

        const payload = {
            id: existUser.id
        }

        const token = generateToken(payload);

        res.status(200).json({existUser, token:token});

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
    
})








export default router;
