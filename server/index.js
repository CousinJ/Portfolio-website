const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const mongoose = require('mongoose');



const port = 5000
const DB_URL = 'mongodb://localhost:27017/'
const messageModel = require('./models/message')

//listen for post requests for messages from the user

//edit and send to db.







mongoose.connect(DB_URL, () => {
    console.log('MONGO DB CONNECTED')
})



app.listen(port, (req, res) => {
    console.log(`Server running on ${port}`)
})