const router = require("express").Router();
const controller = require("./banco.controller");
router.get("/", controller.banco);
//router.get("/debito/cliente/:uIdCliente/cuenta/:uIdCuenta", controller.debito_cliente_cuenta_fecha_paginado);




module.exports = router;