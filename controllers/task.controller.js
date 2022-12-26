const express = require('express');
const tasks = require('../models/task.model');

const router2 = express.Router();

router2.get('/', async (req, res) => {
    try {
        const Tasks = await tasks.find();
        return res.status(200).send(Tasks);
    }
    catch {
        return res.status(500).send(error.message)
    }
})

router2.post('/', async (req, res) => {
    try {
        const Tasks = await tasks.create(req.body);
        return res.status(200).send(Tasks)
    }
    catch {
        return res.status(500).send(error.message)
    }
})


module.exports = router2