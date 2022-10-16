const express = require("express");
const router = express.Router();
const adminCtrl = require("../controllers/admin");
const clientCtrl = require("../controllers/client");
const busCtrl = require("../controllers/bus");


// admin routes
router.get("/admin", adminCtrl.apiGetAlladmins);
router.post("/admin/login", adminCtrl.apiCheckadmin);
router.post("/admin",adminCtrl.apiCreateadmin);
router.get("/admin/:id", adminCtrl.apiGetadminById);
router.put("/admin/:id", adminCtrl.apiUpdateadmin);
router.delete("/admin/:id", adminCtrl.apiDeleteadmin); 


// client routes
router.get("/client", clientCtrl.apiGetAllclients);
router.post("/client/login", clientCtrl.apiCheckclient);
router.post("/client",clientCtrl.apiCreateclient);
router.get("/client/:id", clientCtrl.apiGetclientById);
router.put("/client/:id", clientCtrl.apiUpdateclient);
router.delete("/client/:id", clientCtrl.apiDeleteclient); 


// bus routes
router.get("/bus", busCtrl.apiGetAllbuss);
router.post("/bus/check", busCtrl.apiCheckbus);
router.post("/bus",busCtrl.apiCreatebus);
router.get("/bus/:id", busCtrl.apiGetbusById);
router.put("/bus/:id", busCtrl.apiUpdatebus);
router.delete("/bus/:id", busCtrl.apiDeletebus); 

module.exports = router;
