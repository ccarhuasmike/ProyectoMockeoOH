const router = require("express").Router();
const controller = require("./bloqueo.controller");
router.get("/cabecera", controller.cabecera_list);
router.get("/detalle", controller.detalle_list);

module.exports = router;


