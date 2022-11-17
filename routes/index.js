const express = require("express");
const router = express.Router();
const adminCtrl = require("../controllers/admin");
const clientCtrl = require("../controllers/client");
const busCtrl = require("../controllers/bus");
const tripCtrl = require("../controllers/trip");
const reservationCtrl = require("../controllers/reservation");
const { protect } = require("../middlewares/adminmiddleware");     
 

// admin routes
router.get("/admin",adminCtrl.apiGetAlladmins);
router.post("/admin/login", adminCtrl.apiCheckadmin);
router.post("/admin/register",adminCtrl.apiCreateadmin);
router.get("/admin/:id", adminCtrl.apiGetadminById);
router.put("/admin/:id", adminCtrl.apiUpdateadmin);
router.delete("/admin/:id", adminCtrl.apiDeleteadmin); 


// client routes
router.get("/client", clientCtrl.apiGetAllclients);
router.post("/client/login", clientCtrl.apiCheckclient);
router.post("/client/register",clientCtrl.apiCreateclient);
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


// trip routes
router.get("/trip", tripCtrl.apiGetAlltrips);
router.post("/trip/check", tripCtrl.apiChecktrip);
router.post("/trip",tripCtrl.apiCreatetrip);
router.get("/trip/:id", tripCtrl.apiGettripById);
router.put("/trip/:id", tripCtrl.apiUpdatetrip);
router.delete("/trip/:id", tripCtrl.apiDeletetrip); 


// reservation routes
router.get("/reservation", reservationCtrl.apiGetAllreservations);
router.post("/reservation/check", reservationCtrl.apiCheckreservation);
router.post("/reservation",reservationCtrl.apiCreatereservation);
router.get("/reservation/:id", reservationCtrl.apiGetreservationById);
router.get("/reservation/owner/:id", reservationCtrl.apiGetreservationByIdOwner);
router.put("/reservation/:id", reservationCtrl.apiUpdatereservation);
router.delete("/reservation/:id", reservationCtrl.apiDeletereservation); 

module.exports = router;
