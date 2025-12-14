const router = require("express").Router();
const controller = require("./otp.controller");
router.get("/", controller.otp);
//router.get("/debito/cliente/:uIdCliente/cuenta/:uIdCuenta", controller.debito_cliente_cuenta_fecha_paginado);




module.exports = router;