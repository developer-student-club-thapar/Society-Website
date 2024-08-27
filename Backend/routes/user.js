const express = require("express");
const router = express.Router();

const {userSignUp, userGet} = require("../controllers/User");

router.post("/user/signup", userSignUp);

router.get("/user", userGet);

module.exports = router;

