const router = require("express").Router();
const controller = require("./debito-parametro.controller");
router.get("/listar/tabla/nom-tabla/:nomTabla", controller.nomTabla);
router.get("/listar", controller.debito_parametro);
router.get("/listar/tabla/distintos", controller.tabla_distintos);
router.get("/obtener/parametro/:id", controller.obtener_parametro_id);

module.exports = router;

  

//http://localhost:3000/api/bscuentadebito/v1/debito-parametro/listar/tabla/nom-tabla/TIPO_RETENCION