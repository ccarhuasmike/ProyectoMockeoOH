const express = require("express");
const router = express.Router();

// Unir los routers bajo rutas padre
router.use("/v1/notificacion", require("./notificacion/notificacion.routes"));
router.use("/v1/otp", require("./otp/otp.routes"));

//router.use("/v1/reportes", require("./reportes/reportes.routes"));

module.exports = router;
