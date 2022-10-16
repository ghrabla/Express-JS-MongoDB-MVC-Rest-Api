const bus = require("../models/bus");

module.exports = class busService{
    static async getAllbuss(){
        try {
            const allbuss = await bus.find();
            return allbuss;
        } catch (error) {
            console.log(`Could not fetch buss ${error}`)
        }
    } 

    static async createbus(data){
        try {
            
            const newbus = {
                name: data.name,  
                places: data.places
            }
           const response = await new bus(newbus).save();
           return response;
        } catch (error) {
            console.log(error);
        } 

    }
    static async checkbus(data){
        try {
            
            const checkbus =  await bus.find({name: data.name});
            
            return checkbus;
        } catch (error) {
            console.log(`bus not found. ${error}`)
        }
    }

    static async getbusbyId(busId){
        try {
            const singlebusResponse =  await bus.findById({_id: busId});
            return singlebusResponse;
        } catch (error) {
            console.log(`bus not found. ${error}`)
        }
    }

    static async updatebus(busId,name, places){
            try {
                const updateResponse =  await bus.findByIdAndUpdate({_id:busId},
                    {name, places});

                    return updateResponse;
            } catch (error) {
                console.log(`Could not update bus ${error}` );

        }
    }

    static async deletebus(busId){
        try {
            const deletedResponse = await bus.findOneAndDelete(busId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete bus ${error}`);
        }

    }
}