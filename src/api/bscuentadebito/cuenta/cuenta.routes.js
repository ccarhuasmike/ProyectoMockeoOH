const router = require("express").Router();
const controller = require("./cuenta.controller");
router.get("/cliente/:id", controller.cuente_cliente);
router.get("/cliente/cuenta/:token", controller.cliente_cuenta_token);
router.get("/cliente/:clienteUid/cuenta/:cuentaUid/tarjetas", controller.cuente_cliente_tarjetas);
router.get("/retencion/cuenta/:clienteUid", controller.retencion_cuenta);
router.get("/intereses/:idCuenta/saldoDisponible/0/saldoRetenido/0", controller.intereses_saldoDisponible_saldoRetenido);




module.exports = router;