import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBookingData } from "../../state/actions";
import moment from "moment";
import { DATE_FORMAT } from "../common";
const FilterBar = () => {
  const bookingData = useSelector((state) => state.reducer.bookingData);
  const hotelList = useSelector((state) => state.reducer.hotelList);
  const dispatch = useDispatch();
  const handleChange = (newValue) => {
    dispatch(setBookingData(newValue));
  };
  return (
    <Grid container>
      <Grid item xs={12} sm={2}>
        <TextField
          type="date"
          id="from"
          name="trip-start"
          label={"From"}
          value={moment(bookingData?.from).format("YYYY-MM-DD")}
          min={moment().format(DATE_FORMAT)}
          onChange={(e) =>
            handleChange({
              ...bookingData,
              from: e.target.value,
            })
          }
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <TextField
          type="date"
          id="to"
          label={"To"}
          name="trip-end"
          value={moment(bookingData?.to).format("YYYY-MM-DD")}
          min={moment(bookingData?.from).format("YYYY-MM-DD")}
          onChange={(e) =>
            handleChange({
              ...bookingData,
              to: e.target.value,
            })
          }
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        {hotelList && hotelList.length > 0 && (
          <FormControl fullWidth>
            <InputLabel id="px">Px:</InputLabel>
            <Select
              labelId="px"
              id="px-selector"
              value={bookingData?.px || 1}
              label="PX"
              onChange={(e) =>
                handleChange({
                  ...bookingData,
                  px: e.target.value,
                })
              }
            >
              {Array.from(
                Array(
                  Math.max(
                    ...new Set(hotelList.map((hotel) => hotel.maxPx)).values()
                  ) || 0
                ).keys()
              ).map((px) => (
                <MenuItem key={`selector-option-${px}`} value={px + 1}>
                  {px + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button
          onClick={() =>
            handleChange({
              from: moment()
                .set({
                  hour: 0,
                  minute: 0,
                  second: 0,
                  millisecond: 0,
                })
                .format(),
              to: moment()
                .set({
                  hour: 0,
                  minute: 0,
                  second: 0,
                  millisecond: 0,
                })
                .format(),
              px: 1,
            })
          }
        >
          Clear
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilterBar;
