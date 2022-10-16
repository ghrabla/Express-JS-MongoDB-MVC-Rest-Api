const express = require("express");
const router = express.Router();
const adminCtrl = require("../controllers/admin");

router.get("/admin", adminCtrl.apiGetAlladmins);
router.post("/admin/login", adminCtrl.apiCheckadmin);
router.post("/admin",adminCtrl.apiCreateadmin);
router.get("/admin/:id", adminCtrl.apiGetadminById);
router.put("/admin/:id", adminCtrl.apiUpdateadmin);
router.delete("/admin/:id", adminCtrl.apiDeleteadmin); 

module.exports = router;
