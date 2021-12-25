const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    data: {type : String}
})

const Data = mongoose.model('data',dataSchema)
module.exports = Data