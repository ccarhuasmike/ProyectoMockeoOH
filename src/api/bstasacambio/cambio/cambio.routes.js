const router = require("express").Router();
const controller = require("./cambio.controller");
router.get("/moneda/estado", controller.estado);
router.get("/moneda/campana/con-estado", controller.moneda_campana_con_estado);

//router.get("/debito/cliente/:uIdCliente/cuenta/:uIdCuenta", controller.debito_cliente_cuenta_fecha_paginado);




module.exports = router;