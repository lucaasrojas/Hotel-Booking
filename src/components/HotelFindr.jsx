import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import HotelCard from "./HotelCard";
import FilterBar from "./FilterBar";
import { useDispatch, useSelector } from "react-redux";
import { setBookingData } from "../../state/actions";
import { validateBookingValues } from "../common";

const HotelFindr = () => {
  const dispatch = useDispatch();
  const [availableList, setAvailableList] = useState();
  const bookingData = useSelector((state) => state.reducer.bookingData);
  const hotelList = useSelector((state) => state.reducer.hotelList);
  const reservationList = useSelector((state) => state.reducer.reservationList);

  const filterHotels = (list, filterValues) => {
    return list.filter((hotel) => {
      if (
        !reservationList.find((reserved) => reserved.id === hotel.id) &&
        validateBookingValues(hotel, filterValues, reservationList)
      ) {
        return true;
      }
    });
  };
  useEffect(() => {
    dispatch(
      setBookingData({
        from: moment().format(),
        to: undefined,
        px: 1,
      })
    );
  }, []);

  useEffect(() => {
    if (bookingData?.from && bookingData?.to && bookingData?.px) {
      const newList = filterHotels(hotelList, bookingData);
      setAvailableList(newList);
    }
  }, [bookingData, hotelList, reservationList]);

  return (
    <Grid container>
      <FilterBar />
      <Grid
        item
        container
        xs={12}
        id="hotel-list"
        gap={10}
        style={{ marginInline: "center" }}
        paddingTop={2}
      >
        {availableList?.map((hotel) => (
          <HotelCard key={hotel.id} hotelData={hotel} />
        ))}
      </Grid>
    </Grid>
  );
};

export default HotelFindr;
