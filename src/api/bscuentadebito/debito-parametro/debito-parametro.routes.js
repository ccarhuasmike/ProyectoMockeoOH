const router = require("express").Router();
const controller = require("./debito-parametro.controller");
router.get("/listar/tabla/nom-tabla/:nomTabla", controller.nomTabla);
module.exports = router;

  

//http://localhost:3000/api/bscuentadebito/v1/debito-parametro/listar/tabla/nom-tabla/TIPO_RETENCION