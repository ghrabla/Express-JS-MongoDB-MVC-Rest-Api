const adminService = require("../services/admin");
const AppError = require("../helpers/appError");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
module.exports = class admin {
  static async apiGetAlladmins(req, res, next) {
    try {
      const admins = await adminService.getAlladmins(); 
      if (!admins) {
        res.status(404).json("There are no admin found yet!");
      }
      res.json(admins);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetadminById(req, res, next) { 
    try {
      let id = req.params.id || {};
      const admin = await adminService.getadminbyId(id);
      res.json(admin);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  static async apiCheckadmin(req, res, next) { 
    try { 
      // let email = req.body.email || {};
      // let password = req.body.password || {};
      const admin = await adminService.adminlogin(req.body);
      const validPassword = await bcrypt.compare(req.body.password, admin[0].password);
      if (validPassword) {
        res.status(200).json(
    admin[0],
        //  token: await adminService.generateToken(admin[0]._id),
        );
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
      //  res.json();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiCreateadmin(req, res, next) {
    try {
      console.log(req.body);
      if (!req.body) return next(new AppError("No form data found", 404));
      const createdadmin =  await adminService.createadmin(req.body);
      res.json({
        admin: createdadmin,
        token: await adminService.generateToken(createdadmin._id)
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiUpdateadmin(req, res, next) {
    try {
     

      const updatedadmin = await adminService.updateadmin(req.params.id,req.body.fullname,req.body.email,req.body.password);

      if (updatedadmin.modifiedCount === 0) {
        throw new Error("Unable to update admin, error occord");
      }

      res.json(updatedadmin);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiDeleteadmin(req, res, next) {
    try {
      const adminId = req.params.id;
      const deleteResponse = await adminService.deleteadmin(adminId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
 
};
