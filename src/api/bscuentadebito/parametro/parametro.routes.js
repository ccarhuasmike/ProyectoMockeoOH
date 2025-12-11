const router = require("express").Router();
const controller = require("./parametro.controller");
router.get("/tipo-origen-transaccion", controller.tipo_origen_transaccion);
router.get("/motivo-bloqueo-cuenta", controller.motivo_bloqueo_cuenta);
router.get("/motivo-bloqueo-tarjeta", controller.motivo_bloqueo_tarjeta);
router.get("/estado-tarjeta", controller.estado_tarjeta);

router.get("/estado-cuenta", controller.estado_cuenta);

module.exports = router;

