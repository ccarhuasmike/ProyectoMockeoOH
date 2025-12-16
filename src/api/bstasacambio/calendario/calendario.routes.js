const router = require("express").Router();
const controller = require("./calendario.controller");
router.get("/", controller.calendario);
//router.get("/debito/cliente/:uIdCliente/cuenta/:uIdCuenta", controller.debito_cliente_cuenta_fecha_paginado);




module.exports = router;