const router = require("express").Router();
const controller = require("./auth.controller");
router.post("/accesstoken", controller.accesstoken);
module.exports = router;