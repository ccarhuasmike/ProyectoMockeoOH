const router = require("express").Router();
const controller = require("./cambio.controller");
router.get("/moneda/estado", controller.estado);
router.get("/moneda/campana/con-estado", controller.moneda_campana_con_estado);
router.get("/moneda/campana/operacion/res/buscar", controller.moneda_campana_operacion_res_buscar);
router.get("/moneda/campana/operacion/det/id-cambio-moneda-ope-res/:id", controller.moneda_campana_operacion_det_id_cambio_moneda_ope_res);




module.exports = router;