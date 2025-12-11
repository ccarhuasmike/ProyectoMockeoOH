const express = require("express");
const router = express.Router();

// Unir los routers bajo rutas padre
router.use("/v1/parametro", require("./parametro/parametro.routes"));
router.use("/v1/cliente", require("./cliente/cliente.routes"));
router.use("/v1/tokenizacion", require("./tokenizacion/tokenizacion.routes"));
module.exports = router;
