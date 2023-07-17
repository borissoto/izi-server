const { Router } = require("express");
const { tareasOrdenar } = require("../controllers/task.controller");

const router = Router();

router.get("/", tareasOrdenar);

module.exports = router;