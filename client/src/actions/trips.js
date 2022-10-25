import {
    CREATE_TRIP,
    RETRIEVE_TRIPS,
    UPDATE_TRIP,
    DELETE_TRIP,
    DELETE_ALL_TRIPS,
  } from "./types";
  
  import tripDataService from "../services/tripService";
  
  export const createTrip = (depart_city, arrive_city, depart_date, arrive_date, price, id_bus) => async (dispatch) => {
    try {
      const res = await tripDataService.create({ depart_city, arrive_city, depart_date, arrive_date, price, id_bus });
  
      dispatch({
        type: CREATE_TRIP,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrieveTrips = () => async (dispatch) => {
    try {
      const res = await tripDataService.getAll();
  
      dispatch({
        type: RETRIEVE_TRIPS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateTrip = (id, data) => async (dispatch) => {
    try {
      const res = await tripDataService.update(id, data);
  
      dispatch({
        type: UPDATE_TRIP,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deleteTrip = (id) => async (dispatch) => {
    try {
      await tripDataService.remove(id);
  
      dispatch({
        type: DELETE_TRIP,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteAllTrips = () => async (dispatch) => {
    try {
      const res = await tripDataService.removeAll();
  
      dispatch({
        type: DELETE_ALL_TRIPS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const findTrips = (depart_city,arrive_city) => async (dispatch) => {
    try {
      const res = await tripDataService.findtrip(depart_city,arrive_city);
  
      dispatch({
        type: RETRIEVE_TRIPS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };