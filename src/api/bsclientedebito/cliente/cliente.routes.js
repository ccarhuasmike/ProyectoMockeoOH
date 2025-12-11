const router = require("express").Router();
const controller = require("./cliente.controller");

router.get("/", controller.cliente);
router.get("/agora/persona", controller.agora_persona);

// router.get("/:id", controller.obtener);
// router.post("/", controller.crear);
// router.put("/:id", controller.actualizar);
// router.delete("/:id", controller.eliminar);

module.exports = router;