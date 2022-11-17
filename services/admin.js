const admin = require("../models/admin");
const bcrypt = require("bcrypt"); 
const jwt = require('jsonwebtoken');

module.exports = class adminService{
    static async getAlladmins(){
        try {
            const alladmins = await admin.find();
            return alladmins;
        } catch (error) {
            console.log(`Could not fetch admins ${error}`)
        }
    } 

    static async createadmin(data){
        try {
            const salt = await bcrypt.genSalt(10);
            let hashpassword = await bcrypt.hash(data.password, salt) ;
            const newadmin = {
                fullname: data.fullname,  
                email: data.email,
                password: hashpassword
            }
           const response = await new admin(newadmin).save();
           return response;
        } catch (error) {
            console.log(error);
        } 
    }

    static async adminlogin(data){
        try {  
            const checkadmin =  await admin.find({email: data.email});
            return checkadmin;
        } catch (error) {
            console.log(`admin not found. ${error}`)
        }
    }

    static async getadminbyId(adminId){
        try {
            const singleadminResponse =  await admin.findById({_id: adminId});
            return singleadminResponse;
        } catch (error) {
            console.log(`admin not found. ${error}`)
        }
    }

    static async updateadmin(adminId,fullname, email, password){
            try {
                const updateResponse =  await admin.findByIdAndUpdate({_id: adminId},
                    {fullname, email, password});
                    return updateResponse;
            } catch (error) {
                console.log(`Could not update admin ${error}` );

        }
    }

    static async deleteadmin(adminId){
        try {
            const deletedResponse = await admin.findByIdAndDelete(adminId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete admin ${error}`);
        }

    }
    // Generate JWT
    static async generateToken(id){
        return jwt.sign({ id }, process.env.SECRET, {
          expiresIn: '10d',
        })
      }
    
}