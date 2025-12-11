const router = require("express").Router();
const controller = require("./observadas.controller");
router.get("/", controller.lista_trasacciones_observadas);
module.exports = router;