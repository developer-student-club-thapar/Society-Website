const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

//routes
const user = require("./routes/user");
app.use("/api/v1", user);


//connect to database
const dbConnect = require("./config/database");
dbConnect.connect();

//run app
app.listen(PORT, ()=>{
    console.log(`App running on PORT: ${PORT}`);
})

