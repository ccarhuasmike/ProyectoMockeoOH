const router = require("express").Router();
const controller = require("./ajuste.controller");
router.get("/transaccion/:transaccion", controller.ajuste_transaccion);
module.exports = router;


//https://bscuentadebito.qas-bo-proc.financieraoh.local/bscuentadebito/v1/saldo/uidCliente/23ac807b-afd9-4782-a12b-d57f42b826d6/uidCuenta/8e37cb30-9dd0-4ffe-b1e2-ae9b5ca1101d




