const router = require("express").Router();
const controller = require("./parametro.controller");
router.get("/", controller.parametro_list);
module.exports = router;