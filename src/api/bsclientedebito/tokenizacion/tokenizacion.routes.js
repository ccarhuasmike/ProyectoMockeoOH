const router = require("express").Router();
const controller = require("./tokenizacion.controller");
router.get("/:token/detalle", controller.token_detalle);


// router.get("/:id", controller.obtener);
// router.post("/", controller.crear);
// router.put("/:id", controller.actualizar);
// router.delete("/:id", controller.eliminar);

module.exports = router;