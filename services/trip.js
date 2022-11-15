const trip = require("../models/trip");

module.exports = class tripService{
    static async getAlltrips(){
        try {
            const alltrips = await trip.find().populate('id_bus');
            // console.log(alltrips.id_bus)
            return alltrips;
        } catch (error) {
            console.log(`Could not fetch trips ${error}`) 
        }
    } 

    static async createtrip(data){
        try {
            const ddate =  data.depart_date.replace('T',' ');
            const adate =  data.arrive_date.replace('T',' ');
            const newtrip = {
                depart_city: data.depart_city,  
                arrive_city: data.arrive_city,  
                depart_date: ddate,
                arrive_date: adate,
                price: data.price,
                places: data.places,
                id_bus: data.id_bus

            }
           const response = await new trip(newtrip).save();
           return response;
        } catch (error) {
            console.log(error);
        } 

    }
    static async checktrip(data){
        try {      
            const checktrip =  await trip.find({depart_city: data.depart_city,arrive_city: data.arrive_city,}).where('places').gt(0).populate("id_bus");    
            return checktrip;
        } catch (error) {
            console.log(`trip not found. ${error}`)
        }
    }

    static async gettripbyId(tripId){
        try {
            const singletripResponse =  await trip.findById({_id: tripId});
            return singletripResponse;
        } catch (error) {
            console.log(`trip not found. ${error}`)
        }
    }

    static async updatetrip(tripId,depart_city,arrive_city,depart_date,arrive_date,price,places,id_bus){
            try {
                const updateResponse =  await trip.findByIdAndUpdate({_id:tripId},
                    {depart_city, arrive_city,depart_date,arrive_date,price,places,id_bus});

                    return updateResponse;
            } catch (error) {
                console.log(`Could not update trip ${error}` );

        }
    }

    static async deletetrip(tripId){
        try {
            const deletedResponse = await trip.findByIdAndDelete(tripId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could not delete trip ${error}`);
        }

    }
}