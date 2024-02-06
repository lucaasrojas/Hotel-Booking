import { Box, Modal, Typography } from "@mui/material";
import HotelCard from "./HotelCard";
import React from "react";
import moment from "moment";
import { DATE_FORMAT } from "../common";

const CardModal = ({ hotel, show, onClose }) => {
  return (
    <Modal
      open={show}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {hotel.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Max Pax: {hotel.maxPax}
        </Typography>
        <Typography>
          Available from: {moment(hotel.availability.from).format(DATE_FORMAT)}{" "}
          to: {moment(hotel.availability.to).format(DATE_FORMAT)}
        </Typography>
        {hotel.reservation && (
          <Typography>
            Booked from: {moment(hotel.reservation.from).format(DATE_FORMAT)}{" "}
            to: {moment(hotel.reservation.to).format(DATE_FORMAT)} for{" "}
            {hotel.reservation.px} pax
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default CardModal;
