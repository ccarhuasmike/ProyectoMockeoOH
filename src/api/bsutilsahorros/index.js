const express = require("express");
const router = express.Router();
router.use("/v1/parametro", require("./parametro/parametro.routes"));
module.exports = router;
