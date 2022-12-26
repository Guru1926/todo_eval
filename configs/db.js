const mongoose = require('mongoose');

const connection = async () => {
    await mongoose.connect("mongodb+srv://guru1926:G1u9r9u9@cluster0.hpkexxr.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = { connection };