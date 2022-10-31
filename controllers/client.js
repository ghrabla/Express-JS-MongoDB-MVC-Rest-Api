const clientService = require("../services/client");
const AppError = require("../helpers/appError");
const bcrypt = require("bcrypt");
module.exports = class client {
  static async apiGetAllclients(req, res, next) {
    try {
      const clients = await clientService.getAllclients(); 
      if (!clients) {
        res.status(404).json("There are no client found yet!");
      }
      res.json(clients);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetclientById(req, res, next) { 
    try {
      let id = req.params.id || {};
      const client = await clientService.getclientbyId(id);
      res.json(client);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCheckclient(req, res, next) { 
    try {
      // let email = req.body.email || {};
      // let password = req.body.password || {};
      const client = await clientService.clientlogin(req.body);
      const validPassword = await bcrypt.compare(req.body.password, client[0].password);
      if (validPassword) {
        res.status(200).json( client[0] );
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
      //  res.json();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiCreateclient(req, res, next) {
    try {
      console.log(req.body);
      if (!req.body) return next(new AppError("No form data found", 404));
      const createdclient =  await clientService.createclient(req.body);
      res.json(createdclient);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiUpdateclient(req, res, next) {
    try {
     

      const updatedclient = await clientService.updateclient(req.params.id,req.body.fullname,req.body.email,req.body.password);

      if (updatedclient.modifiedCount === 0) {
        throw new Error("Unable to update client, error occord");
      }

      res.json(updatedclient);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiDeleteclient(req, res, next) {
    try {
      const clientId = req.params.id;
      const deleteResponse = await clientService.deleteclient(clientId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
