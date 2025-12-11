const router = require("express").Router();
const controller = require("./parametro.controller");
router.get("/nomTabla/:nomTabla", controller.nomTabla);
//router.get("/debito/cliente/:uIdCliente/cuenta/:uIdCuenta", controller.debito_cliente_cuenta_fecha_paginado);




module.exports = router;