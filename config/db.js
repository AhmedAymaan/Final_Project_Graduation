//FILENAME : db.js
//mongodb+srv://Ahmed_Ayman:xFEfmtAPu8xmDYwx@node-auth.jwdx4vs.mongodb.net/?retryWrites=true&w=majority
const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI =  "mongodb+srv://Ahmed_Ayman:xFEfmtAPu8xmDYwx@node-auth.jwdx4vs.mongodb.net/?retryWrites=true&w=majority&appName=node-auth";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;

