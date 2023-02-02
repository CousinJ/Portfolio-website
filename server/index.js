const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");


const DB_URL = process.env.DB_URL;

 
const messageModel = require("./models/message");

//listen for post requests for messages from the user

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send("data received");

  //edit/ filter and send to db.

  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  if (name.length > 1 && email.length > 1 && message.length > 1) {
    //send to db! use message model
    messageModel.create(
      { name: name, email: email, message: message },
      (error, newContact) => {
        if (error) {
          console.log(error);
        } else {
          console.log(newContact);
        }
      }
    );
  } else {
    console.log("ERROR input(s) < 1");
  }
});

mongoose.connect(DB_URL, () => {
  console.log("MONGO DB CONNECTED");
});

app.listen(process.env.PORT || 3001, (req, res) => {
  console.log(`Server running `);
});
