const express = require("express");
const router = express.Router();
// Unir los routers bajo rutas padre
router.use("/auth/v1", require("./auth/auth.routes"));
module.exports = router;
