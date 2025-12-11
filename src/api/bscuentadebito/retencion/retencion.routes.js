const router = require("express").Router();
const controller = require("./retencion.controller");
router.get("/cuenta/:clienteUid", controller.retencion_cuenta);
https://bscuentadebito.qas-bo-proc.financieraoh.local/bscuentadebito/v1/retencion/cuenta/8e37cb30-9dd0-4ffe-b1e2-ae9b5ca1101d


module.exports = router;