const admin = require("../models/admin");

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

            const newadmin = {
                fullname: data.fullname,  
                email: data.email,
                password: data.password
            }
           const response = await new admin(newadmin).save();
           return response;
        } catch (error) {
            console.log(error);
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

    static async updateadmin(fullname, email, password){
            try {
                const updateResponse =  await admin.updateOne(
                    {fullname, email, password});

                    return updateResponse;
            } catch (error) {
                console.log(`Could not update admin ${error}` );

        }
    }

    static async deleteadmin(adminId){
        try {
            const deletedResponse = await admin.findOneAndDelete(adminId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete admin ${error}`);
        }

    }
}