const adminService = require("../services/admin");

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

  static async apiCreateadmin(req, res, next) {
    try {
      // console.log(req.body);
      const createdadmin =  await adminService.createadmin(req.body);
      res.json(createdadmin);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiUpdateadmin(req, res, next) {
    try {
      const comment = {};
      comment.title = req.body.title;
      comment.body = req.body.body;
      comment.adminImage = req.body.admin_image;

      const updatedadmin = await adminService.updateadmin(comment);

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
