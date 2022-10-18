const client = require("../models/client");
const bcrypt = require("bcrypt"); 

module.exports = class clientService{
    static async getAllclients(){
        try {
            const allclients = await client.find();
            return allclients;
        } catch (error) {
            console.log(`Could not fetch clients ${error}`)
        }
    } 

    static async createclient(data){
        try {
            const salt = await bcrypt.genSalt(10);
            let hashpassword = await bcrypt.hash(data.password, salt) ;
            const newclient = {
                fullname: data.fullname,  
                email: data.email,
                password: hashpassword
            }
           const response = await new client(newclient).save();
           return response;
        } catch (error) {
            console.log(error);
        } 

    }
    static async clientlogin(data){
        try {
            
            const checkclient =  await client.find({email: data.email});
            
            return checkclient;
        } catch (error) {
            console.log(`client not found. ${error}`)
        }
    }

    static async getclientbyId(clientId){
        try {
            const singleclientResponse =  await client.findById({_id: clientId});
            return singleclientResponse;
        } catch (error) {
            console.log(`client not found. ${error}`)
        }
    }

    static async updateclient(clientId,fullname, email, password){
            try {
                const updateResponse =  await client.findByIdAndUpdate({_id:clientId},
                    {fullname, email, password});

                    return updateResponse;
            } catch (error) {
                console.log(`Could not update client ${error}` );

        }
    }

    static async deleteclient(clientId){
        try {
            const deletedResponse = await client.findByIdAndDelete(clientId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete client ${error}`);
        }

    }
}