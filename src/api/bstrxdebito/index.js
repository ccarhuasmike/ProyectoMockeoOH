const express = require("express");
const router = express.Router();

// Unir los routers bajo rutas padre
router.use("/v1/transaccion", require("./transaccion/transaccion.routes"));
router.use("/v1/observadas", require("./observadas/observadas.routes"));




module.exports = router;
