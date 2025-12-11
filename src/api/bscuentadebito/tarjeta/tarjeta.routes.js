const router = require("express").Router();
const controller = require("./tarjeta.controller");
router.get("/cliente/:uIdCliente/cuenta/:uIdCuenta/tarjetas/:token/configuracion", controller.cliente_cuenta_tarjetas_configuracion);
router.get("/cliente/:uIdCliente/cuenta/:uIdCuenta/tarjetas/:token/historial-botonera", controller.cliente_cuenta_tarjetas_historial_botonera);
module.exports = router;







