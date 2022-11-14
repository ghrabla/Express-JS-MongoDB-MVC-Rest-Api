const tripService = require("../services/trip");
const AppError = require("../helpers/appError");
module.exports = class trip {
  static async apiGetAlltrips(req, res, next) {
    try {
      const trips = await tripService.getAlltrips(); 
      if (!trips) {
        res.status(404).json("There are no trip found yet!");
      }
      res.json(trips);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGettripById(req, res, next) { 
    try {
      let id = req.params.id || {};
      const trip = await tripService.gettripbyId(id);
      res.json(trip);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiChecktrip(req, res, next) { 
    try {
      const trip = await tripService.checktrip(req.body);
       res.json(trip);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiCreatetrip(req, res, next) {
    try {
      console.log(req.body);
      if (!req.body) return next(new AppError("No form data found", 404));
      const createdtrip =  await tripService.createtrip(req.body);
      res.json(createdtrip);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiUpdatetrip(req, res, next) {
    try {
      const ddate = req.body.depart_date.replace('T',' ');
      const adate = req.body.arrive_date.replace('T',' ');
      const updatedtrip = await tripService.updatetrip(req.params.id,req.body.depart_city,req.body.arrive_city,ddate,adate,req.body.price,req.body.places,req.body.id_bus);
      if (updatedtrip.modifiedCount === 0) {
        throw new Error("Unable to update trip, error occord");
      }
      res.json(updatedtrip);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiDeletetrip(req, res, next) {
    try {
      const tripId = req.params.id;
      const deleteResponse = await tripService.deletetrip(tripId);
      res.json({message:"trip deleted successfully"});
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
