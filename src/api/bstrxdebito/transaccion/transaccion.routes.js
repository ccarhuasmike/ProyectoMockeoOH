const router = require("express").Router();
const controller = require("./transaccion.controller");
router.post("/debito/movimientos/ext/Plan", controller.movimientos_ext_plan);
router.get("/debito/estado-cuenta/cliente/:uIdCliente/cuenta/:uIdCuenta", controller.estado_cuenta_cliente_cuenta);
router.get("/debito/cliente/:uIdCliente/cuenta/:uIdCuenta", controller.debito_cliente_cuenta_fecha_paginado);



//debito/estado-cuenta/cliente/23ac807b-afd9-4782-a12b-d57f42b826d6/cuenta/8e37cb30-9dd0-4ffe-b1e2-ae9b5ca1101d

module.exports = router;