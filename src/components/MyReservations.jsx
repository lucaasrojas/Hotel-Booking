import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import moment from "moment";
import HotelCard from "./HotelCard";
const MyReservations = () => {
  const reservationList = useSelector((state) => state.reducer.reservationList);
  console.log("RESERCATIONS", reservationList);
  return (
    <Grid container>
      <Grid xs={12}>
        <Typography variant="h4">My Reservations</Typography>
      </Grid>
      <Grid
        item
        container
        xs={12}
        id="hotel-list"
        gap={10}
        style={{ marginInline: "center" }}
        paddingTop={2}
      >
        {reservationList?.map((hotel) => (
          <HotelCard key={hotel.id} isReserved hotelData={hotel} />
        ))}
      </Grid>
    </Grid>
  );
};

export default MyReservations;
