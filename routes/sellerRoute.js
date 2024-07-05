import express from 'express';
const router = express.Router();

import Seller from './../models/sellerModel.js'

import {jwtAuthMiddleware, generateToken} from "./../jwt.js"
import Course from '../models/courseModel.js';


router.get('/signup', (req, res) => {
    res.send("seller signup");
})

router.post('/signup', async (req, res) => {
    try{
        const data = req.body;
        console.log(data);
    
        //find this username is already exist or not
        const existSeller = await Seller.findOne({username: data.username});
    
        if(existSeller){
            return res.status(400).json({error: "seller already exist"});
        }
    
        const newSeller = new Seller(data);
        const seller = await newSeller.save().then(seller => console.log(seller));

        const payload = {
            id: newSeller.id
        }

        const token = generateToken(payload);
    
    
        res.status(200).json({massage: "seller created", newSeller, token: token});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Internal server error"});
    }
})

router.get('/login', (req, res) => {
    res.send("seller login");
})

router.post('/login', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        const existSeller = await Seller.findOne({ username: data.username });

        if (!existSeller) {
            return res.status(400).json({ error: "seller not found! singup first" });
        }

        if(data.password != existSeller.password){
            return res.status(400).json({ error: "wrong password" });
        }

        const payload = {
            id: existSeller.id
        }

        const token = generateToken(payload);

        res.status(200).json({existSeller, token: token});

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
    
})

router.post("/addcourse", jwtAuthMiddleware, async (req, res) => {
    try{
        const data = req.body;
        const id = req.user.id;
        
        //find this course is already exist or not
        const existCourse = await Course.findOne({title: data.title});
    
        if(existCourse){
            return res.status(400).json({error: "course already exist"});
        }
    
        const newCourse = new Course({
            title : data.title,
            description : data.description,
            image : data.image,
            prize : data.prize,
            title : data.title,
            owner : id
        });
        const course = await newCourse.save().then(course => console.log(course));
    
        res.status(200).json({massage: "course created", newCourse});
    
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }


})



export default router;
