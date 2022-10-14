const express = require("express");
const router = express.Router();
const adminCtrl = require("../controllers/admin");

router.get("/", adminCtrl.apiGetAlladmins);
router.post("/",adminCtrl.apiCreateadmin);
router.get("/:id", adminCtrl.apiGetadminById);
router.put("/:id", adminCtrl.apiUpdateadmin);
router.delete("/:id", adminCtrl.apiDeleteadmin);

module.exports = router;
