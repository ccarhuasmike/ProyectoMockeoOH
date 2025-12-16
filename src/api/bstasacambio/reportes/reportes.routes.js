const router = require("express").Router();
const controller = require("./reportes.controller");
router.get("/consultas-cambio-moneda", controller.consultas_cambio_moneda);
router.get("/transacciones-cambio-moneda", controller.transacciones_cambio_moneda);
router.get("/cambio-moneda-log/nro-operacion", controller.cambio_moneda_log_nro_operacion);

module.exports = router;