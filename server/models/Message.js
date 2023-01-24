const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(

    {name: String,
    email: String,
    message: String}
    
    )


const messageModel = mongoose.model('message', messageSchema)

module.exports = messageModel