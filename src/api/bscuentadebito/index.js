const express = require("express");
const router = express.Router();
router.use("/v1/cuenta", require("./cuenta/cuenta.routes"));
router.use("/v1/retencion", require("./retencion/retencion.routes"));
router.use("/v1/bloqueo", require("./bloqueo/bloqueo.routes"));
router.use("/v1/parametro", require("./parametro/parametro.routes"));
router.use("/v1/debito-parametro", require("./debito-parametro/debito-parametro.routes"));
router.use("/v1/interes", require("./interes/interes.routes"));
router.use("/v1/saldo", require("./saldo/saldo.routes"));
router.use("/v1/ajuste", require("./ajuste/ajuste.routes"));
router.use("/v1/tarjeta", require("./tarjeta/tarjeta.routes"));
module.exports = router;

