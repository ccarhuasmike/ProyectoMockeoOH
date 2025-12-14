const router = require("express").Router();
const controller = require("./notificacion.controller");
router.get("/digitalCardId", controller.notificacion_digitalCardId);
//router.get("/debito/cliente/:uIdCliente/cuenta/:uIdCuenta", controller.debito_cliente_cuenta_fecha_paginado);




module.exports = router;