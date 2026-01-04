const express = require("express");
const router = express.Router();
router.use("/v1/bloqueo", require("./bloqueo/bloqueo.routes"));
module.exports = router;


