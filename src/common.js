import moment from "moment";

export const DATE_FORMAT = "MM-DD-YYYY";

export const validateBookingValues = (hotel, filterValues) => {
  return (
    hotel.maxPx >= filterValues.px &&
    moment(hotel.availability.from)
      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
      .isSameOrBefore(
        moment(filterValues.from).set({
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0,
        })
      ) &&
    moment(hotel.availability.to).isSameOrAfter(moment(filterValues.to))
  );
};
