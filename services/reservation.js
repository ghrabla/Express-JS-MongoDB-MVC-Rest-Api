const reservation = require("../models/reservation");

module.exports = class reservationService{
    static async getAllreservations(){
        try {
            const allreservations = await reservation.find().populate('id_owner').populate('id_trip').populate('id_bus');
            return allreservations;
        } catch (error) {
            console.log(`Could not fetch reservations ${error}`)
        }
    } 

    static async createreservation(data){
        try {
            
            const newreservation = {
                ticket_number: data.ticket_number, 
                price: data.price,
                id_owner: data.id_owner, 
                id_trip: data.id_trip,
                id_bus: data.id_bus

            }
           const response = await new reservation(newreservation).save();
           return response;
        } catch (error) {
            console.log(error);
        } 

    }
    static async checkreservation(data){
        try {      
            const checkreservation =  await reservation.find({id_owner: data.id_owner,id_trip: data.id_trip,});    
            return checkreservation;
        } catch (error) {
            console.log(`reservation not found. ${error}`)
        }
    }

    static async getreservationbyId(reservationId){
        try {
            const singlereservationResponse =  await reservation.findById({_id: reservationId});
            return singlereservationResponse;
        } catch (error) {
            console.log(`reservation not found. ${error}`)
        }
    }

    static async getreservationbyIdOwner(ownerId){
        try {
            const singlereservationResponse =  await reservation.find({id_owner: ownerId}).populate("id_owner").populate("id_trip").populate("id_bus");
            return singlereservationResponse;
        } catch (error) {
            console.log(`reservation not found. ${error}`)
        }
    }

    static async updatereservation(reservationId,ticket_number,price,id_owner,id_trip,id_bus){
            try {
                const updateResponse =  await reservation.findByIdAndUpdate({_id:reservationId},
                    {ticket_number,price,id_owner,id_trip,id_bus});

                    return updateResponse;
            } catch (error) {
                console.log(`Could not update reservation ${error}` );

        }
    }

    static async deletereservation(reservationId){
        try {
            const deletedResponse = await reservation.findByIdAndDelete(reservationId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could not delete reservation ${error}`);
        }

    }
}