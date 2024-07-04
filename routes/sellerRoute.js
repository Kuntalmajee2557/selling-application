import express from 'express';
const router = express.Router();

router.get('/signup', (req, res) => {
    res.send("seller signup");
})

router.get('/:id/profile', (req, res) => {
    res.send('seller profile');
})

export default router;
