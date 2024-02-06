import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addReservation,
  removeReservation,
  updateReservation,
} from "../../state/actions";
import moment from "moment";
import { useState } from "react";
import { DATE_FORMAT, validateBookingValues } from "../common";
import CardModal from "./CardModal";

const HotelCard = ({ hotelData, isReserved }) => {
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => state.reducer.bookingData);
  const hotelList = useSelector((state) => state.reducer.hotelList);
  const [isEdit, setIsEdit] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(hotelData.reservation || {});
  const handleReserve = () => {
    dispatch(
      isReserved
        ? removeReservation(hotelData.id)
        : addReservation({ ...hotelData, reservation: bookingData })
    );
  };

  const handleEditReservation = (data) => {
    if (validateBookingValues(hotelData, data)) {
      setIsError(false);
      setIsEdit(false);
      dispatch(updateReservation({ ...hotelData, reservation: data }));
    } else {
      setIsError(true);
    }
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={hotelData.image}
          title={hotelData.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {hotelData.name}
          </Typography>

          {isReserved ? (
            isEdit ? (
              <>
                <Grid container>
                  <Grid item xs={12}>
                    <TextField
                      type="date"
                      id="from"
                      name="trip-start"
                      label={"From"}
                      value={moment(editData?.from).format("YYYY-MM-DD")}
                      min={moment().format(DATE_FORMAT)}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          from: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="date"
                      id="to"
                      label={"To"}
                      name="trip-end"
                      value={moment(editData?.to).format("YYYY-MM-DD")}
                      min={moment(editData?.from).format("YYYY-MM-DD")}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          to: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {hotelList && hotelList.length > 0 && (
                      <FormControl fullWidth>
                        <InputLabel id="px">Px:</InputLabel>
                        <Select
                          labelId="px"
                          id="px-selector"
                          value={editData?.px || 1}
                          label="PX"
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              px: e.target.value,
                            })
                          }
                        >
                          {Array.from(
                            Array(
                              Math.max(
                                ...new Set(
                                  hotelList.map((hotel) => hotel.maxPx)
                                ).values()
                              ) || 0
                            ).keys()
                          ).map((px) => (
                            <MenuItem
                              key={`selector-option-${px}`}
                              value={px + 1}
                            >
                              {px + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                  </Grid>
                  {isError && (
                    <span>
                      Error: check your dates and pax number, it only allows
                      booking from{" "}
                      {moment(hotelData.availability.from).format(DATE_FORMAT)}{" "}
                      to {moment(hotelData.availability.to).format(DATE_FORMAT)}{" "}
                      and a maximum of {hotelData.maxPx} pax
                    </span>
                  )}
                  <Grid item xs={12} sm={2}>
                    <Button onClick={() => handleEditReservation(editData)}>
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </>
            ) : (
              <>
                <Typography>
                  PX: {isReserved ? hotelData.reservation.px : hotelData.maxPx}
                </Typography>
                <Typography>
                  Reserved from:{" "}
                  {moment(hotelData.reservation.from).format(DATE_FORMAT)} - To:{" "}
                  {moment(hotelData.reservation.to).format(DATE_FORMAT)}
                </Typography>
              </>
            )
          ) : (
            <>
              <Typography>PX: {hotelData.maxPx}</Typography>

              <Typography>
                From: {moment(hotelData.availability.from).format(DATE_FORMAT)}{" "}
                - To: {moment(hotelData.availability.to).format(DATE_FORMAT)}
              </Typography>
            </>
          )}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleReserve}>
            {isReserved ? "Unreserve" : "Reserve"}
          </Button>
          <Button size="small" onClick={() => setShowModal(true)}>
            Show
          </Button>
          {isReserved && !isEdit && (
            <Button size="small" onClick={() => setIsEdit(true)}>
              Edit
            </Button>
          )}
        </CardActions>
      </Card>
      <CardModal
        hotel={hotelData}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default HotelCard;
