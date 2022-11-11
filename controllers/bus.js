const busService = require("../services/bus");
const AppError = require("../helpers/appError");
module.exports = class bus {
  static async apiGetAllbuss(req, res, next) {
    try {
      const buss = await busService.getAllbuss(); 
      if (!buss) {
        res.status(404).json("There are no bus found yet!");
      }
      res.json(buss);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetbusById(req, res, next) { 
    try {
      let id = req.params.id || {};
      const bus = await busService.getbusbyId(id);
      res.json(bus);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCheckbus(req, res, next) { 
    try {
      const bus = await busService.checkbus(req.body);
       res.json(bus);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiCreatebus(req, res, next) {
    try {
      console.log(req.body);
      if (!req.body) return next(new AppError("No form data found", 404));
      const createdbus =  await busService.createbus(req.body);
      res.json(createdbus);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiUpdatebus(req, res, next) {
    try {
     

      const updatedbus = await busService.updatebus(req.params.id,req.body.name,req.body.places,req.body.matrql);

      if (updatedbus.modifiedCount === 0) {
        throw new Error("Unable to update bus, error occord");
      }

      res.json(updatedbus);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiDeletebus(req, res, next) {
    try {
      const busId = req.params.id;
      const deleteResponse = await busService.deletebus(busId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
