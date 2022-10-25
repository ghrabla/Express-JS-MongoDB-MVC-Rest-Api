import {
    CREATE_TRIP,
    RETRIEVE_TRIPS,
    UPDATE_TRIP,
    DELETE_TRIP,
    DELETE_ALL_TRIPS,
  } from "../actions/types";
  
  const initialState = [];
  
  function tripReducer(trips = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_TRIP:
        return [...trips, payload];
  
      case RETRIEVE_TRIPS:
        return payload;
  
      case UPDATE_TRIP:
        return trips.map((trip) => {
          if (trip.id === payload.id) {
            return {
              ...trip,
              ...payload,
            };
          } else {
            return trip;
          }
        });
  
      case DELETE_TRIP:
        return trips.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_TRIPS:
        return [];
  
      default:
        return trips;
    }
  };
  
  export default tripReducer;