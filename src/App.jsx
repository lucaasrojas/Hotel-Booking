import React, { useEffect, useState } from "react";
import moment from "moment";
import { Button, Grid, Typography } from "@mui/material";
import HotelFindr from "./components/HotelFindr";
import MyReservations from "./components/MyReservations";
import { useDispatch, useSelector } from "react-redux";
import { setHotelList } from "../state/actions";
import { getHotelList } from "./api";

const App = () => {
  const dispatch = useDispatch();
  const [showReservations, setShowReservations] = useState(false);

  useEffect(() => {
    const hotelList = getHotelList();
    dispatch(setHotelList(hotelList));
  }, []);
  return (
    <Grid container padding={3} rowGap={4}>
      <Grid item xs={12}>
        <Typography variant="h3">HotelFindr</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={() => setShowReservations((prev) => !!!prev)}
        >
          {showReservations ? "Show Findr" : "My Reservations"}
        </Button>
      </Grid>
      <Grid item container xs={12}>
        {showReservations ? <MyReservations /> : <HotelFindr />}
      </Grid>
    </Grid>
  );
};

export default App;
