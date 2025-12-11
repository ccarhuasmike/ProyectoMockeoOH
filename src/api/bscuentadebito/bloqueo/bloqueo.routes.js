const router = require("express").Router();
const controller = require("./bloqueo.controller");
router.get("/cuenta/:uIdCuenta", controller.bloqueo_cuenta);
router.get("/razon", controller.razon);

https://bscuentadebito.qas-bo-proc.financieraoh.local/bscuentadebito/v1/bloqueo/cuenta/8e37cb30-9dd0-4ffe-b1e2-ae9b5ca1101d
module.exports = router;