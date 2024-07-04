import express from 'express';
const router = express.Router();

import Seller from './../models/sellerModel.js'

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
    
    
        res.status(200).json({massage: "seller created", newSeller});
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

        res.status(400).json(existSeller);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
    
})



export default router;
