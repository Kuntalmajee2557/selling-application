const express = require('express');
const { route } = require('./userRoute');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.send("seller signup");
})

router.get('/:id/profile', (req, res) => {
    res.send('seller profile');
})

module.exports = router;
