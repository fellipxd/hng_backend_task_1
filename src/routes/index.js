const express = require("express");
const { classifyNumber } = require("../controllers/numberControllers");

const router = express.Router();

router.get("/classify-number", classifyNumber);

module.exports = router;
