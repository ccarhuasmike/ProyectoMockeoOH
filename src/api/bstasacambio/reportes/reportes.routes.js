const router = require("express").Router();
const controller = require("./reportes.controller");
router.get("/consultas-cambio-moneda", controller.consultas_cambio_moneda);

//http://localhost:3000/api/bstasacambio/v1/reportes/consultas-cambio-moneda?fechaConsultaDesde=2025-12-01&fechaConsultaHasta=2025-12-12&idConsultaPartner=&nroCambioMonedaOperacion=&tipoDoc=&numDoc=

module.exports = router;