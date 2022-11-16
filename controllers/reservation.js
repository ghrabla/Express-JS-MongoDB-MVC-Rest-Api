const reservationService = require("../services/reservation");
const AppError = require("../helpers/appError");
module.exports = class reservation {
  static async apiGetAllreservations(req, res, next) {
    try {
      const reservations = await reservationService.getAllreservations(); 
      if (!reservations) {
        res.status(404).json("There are no reservation found yet!");
      }
      res.json(reservations);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetreservationById(req, res, next) { 
    try {
      let id = req.params.id || {};
      const reservation = await reservationService.getreservationbyId(id);
      res.json(reservation);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiGetreservationByIdOwner(req, res, next) { 
    try {
      let id = req.params.id || {};
      const reservation = await reservationService.getreservationbyIdOwner(id);
      res.json(reservation);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCheckreservation(req, res, next) { 
    try {
      const reservation = await reservationService.checkreservation(req.body);
       res.json(reservation);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiCreatereservation(req, res, next) {
    try {
      console.log(req.body);
      if (!req.body) return next(new AppError("No form data found", 404));
      const createdreservation =  await reservationService.createreservation(req.body);
      res.json(createdreservation);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiUpdatereservation(req, res, next) {
    try {
      const updatedreservation = await reservationService.updatereservation(req.params.id,req.body.ticket_number,req.body.price,req.body.id_owner,req.body.id_trip,req.body.id_bus);
      if (updatedreservation.modifiedCount === 0) {
        throw new Error("Unable to update reservation, error occord");
      }
      res.json(updatedreservation);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiDeletereservation(req, res, next) {
    try {
      const reservationId = req.params.id;
      const deleteResponse = await reservationService.deletereservation(reservationId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
