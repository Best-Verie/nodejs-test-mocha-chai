const express = require("express");
const router = express.Router();

const tokenControllers = require("../controllers/token.controller");

router.post("/generateToken", tokenControllers.create);

module.exports = router;
