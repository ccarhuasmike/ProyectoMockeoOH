const express = require("express");
const router = express.Router();

// Unir los routers bajo rutas padre
router.use("/v1/parametro", require("./parametro/parametro.routes"));
router.use("/v1/reportes", require("./reportes/reportes.routes"));

module.exports = router;
