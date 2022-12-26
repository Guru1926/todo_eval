const express = require('express');
const { connection } = require('./configs/db');
const userController = require('./controllers/user.controller');
const taskController = require('./controllers/task.controller')


const app = express();

app.use(express.json());

app.use("/login", userController);
app.use("/task", taskController);


app.listen(3000, () => {
    try {
        connection();
        console.log('listening on port 3000');
    }
    catch (error) {
        console.log(error);
    }
})