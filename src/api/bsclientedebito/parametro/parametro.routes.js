const router = require("express").Router();
const controller = require("./parametro.controller");
router.get("/documentos/tipos", controller.documentos_tipos);

// router.get("/:id", controller.obtener);
// router.post("/", controller.crear);
// router.put("/:id", controller.actualizar);
// router.delete("/:id", controller.eliminar);

module.exports = router;