const router = require("express").Router();
const controller = require("./parametro.controller");
router.get("/nomTabla/:nomTabla", controller.nomTabla);
router.get("/", controller.parametro);
module.exports = router;