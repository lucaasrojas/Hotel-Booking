const initialState = {
  reservationList: [],
  bookingData: {},
  hotelList: [],
};

export const TYPES = {
  ADD_RESERVATION: "ADD_RESERVATION",
  REMOVE_RESERVATION: "REMOVE_RESERVATION",
  UPDATE_RESERVATION: "UPDATE_RESERVATION",
  SET_BOOKING_DATA: "SET_BOOKING_DATA",
  SET_HOTEL_LIST: "SET_HOTEL_LIST",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPES.ADD_RESERVATION:
      return {
        ...state,
        reservationList: [...state.reservationList, payload.newReservation],
      };
    case TYPES.REMOVE_RESERVATION:
      return {
        ...state,
        reservationList: state.reservationList.filter(
          (reservation) => reservation.id !== payload.id
        ),
      };
    case TYPES.UPDATE_RESERVATION:
      return {
        ...state,
        reservationList: [
          ...state.reservationList.filter(
            (reservation) => reservation.id !== payload.updatedReservation.id
          ),
          payload.updatedReservation,
        ],
      };
    case TYPES.SET_BOOKING_DATA:
      return {
        ...state,
        bookingData: payload.bookingData,
      };
    case TYPES.SET_HOTEL_LIST:
      return {
        ...state,
        hotelList: payload.hotelList,
      };
    default:
      return state;
  }
};

export default reducer;
