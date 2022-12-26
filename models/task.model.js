const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        "taskname": { type: String, required: true },
        "status": { type: String, required: true },
        "tag": { type: String, required: true }

    },
    {
        versionKey: false,
        timestamps: true
    }
)

const tasks = mongoose.model('Tasks', taskSchema);

module.exports = tasks;