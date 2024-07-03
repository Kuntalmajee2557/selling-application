// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.send('user signup');
})

router.get('/:id/profile', (req, res) => {
    res.send('user profile');
})


module.exports = router;
