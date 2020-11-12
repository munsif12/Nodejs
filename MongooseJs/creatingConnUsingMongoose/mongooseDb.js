const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/firstTryMongoose", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection created");
    })
    .catch(err => {
        console.log(`Connection unsucccesfull ${err}`);
    });