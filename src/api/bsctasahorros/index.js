const express = require("express");
const router = express.Router();
router.use("/v1/aba", require("./aba/aba.routes"));
module.exports = router;
