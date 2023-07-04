const { Router } = require("express");
const { tareasGet } = require("../controllers/task.controller");

const router = Router();

router.get("/", tareasGet);

module.exports = router;
