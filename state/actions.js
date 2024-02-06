import { TYPES } from "./reducer";

export const addReservation = (newReservation) => {
  return {
    type: TYPES.ADD_RESERVATION,
    payload: {
      newReservation,
    },
  };
};

export const removeReservation = (reservationId) => {
  return {
    type: TYPES.REMOVE_RESERVATION,
    payload: {
      id: reservationId,
    },
  };
};

export const updateReservation = (updatedReservation) => {
  return {
    type: TYPES.UPDATE_RESERVATION,
    payload: {
      updatedReservation,
    },
  };
};

export const setBookingData = (bookingData) => {
  return {
    type: TYPES.SET_BOOKING_DATA,
    payload: {
      bookingData,
    },
  };
};

export const setHotelList = (hotelList) => {
  return {
    type: TYPES.SET_HOTEL_LIST,
    payload: {
      hotelList,
    },
  };
};
