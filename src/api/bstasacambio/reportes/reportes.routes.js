const router = require("express").Router();
const controller = require("./reportes.controller");
router.get("/consultas-cambio-moneda", controller.consultas_cambio_moneda);
router.get("/transacciones-cambio-moneda", controller.transacciones_cambio_moneda);
router.get("/cambio-moneda-log/nro-operacion", controller.cambio_moneda_log_nro_operacion);
router.get("/cambio-moneda-log", controller.cambio_moneda_log);
router.get("/resumen-pre-liquidacion", controller.resumen_pre_liquidacion);
router.get("/detalle-pre-liquidacion", controller.detalle_pre_liquidacion);
router.get("/resumen-liquidacion", controller.resumen_liquidacion);
router.get("/detalle-liquidacion", controller.detalle_liquidacion);

module.exports = router;