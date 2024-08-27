const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{console.log("Connected to DB successfully")})
    .catch((err)=>{
        console.log("Connection to DB failed");
        console.error(err);
        process.exit(1);
    })
}