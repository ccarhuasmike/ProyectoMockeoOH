const router = require("express").Router();
const controller = require("./aba.controller");
router.post("/solicitudes-ahorros/filtro-fecha", controller.solicitudes_ahorros_filtro_fecha);
router.post("/solicitudes-ahorros/rechazadas", controller.solicitudes_ahorros_rechazadas);

module.exports = router;