const router = require("express").Router();
const controller = require("./interes.controller");
router.post("/tarifario", controller.tarifario);
module.exports = router;


//http://localhost:3000/api/bscuentadebito/v1/debito-parametro/listar/tabla/nom-tabla/TIPO_RETENCION