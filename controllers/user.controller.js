const express = require('express');
const users = require('../models/user.model.js');


const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const Users = await users.create(req.body);
        return res.status(200).send(Users)
    }
    catch {
        return res.status(500).send(error.message)
    }
})


module.exports = router