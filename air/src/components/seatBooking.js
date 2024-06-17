import { Checkbox, FormGroup } from "@mui/material";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import { AppBar, Box, Button, Fab, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, Paper, Radio, RadioGroup, Select, TextField, Toolbar, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ChairIcon from '@mui/icons-material/Chair';
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import img from '../image/airline.jpg';
import AddIcon from '@mui/icons-material/Add';
import { useHistory, useLocation, useNavigate } from "react-router-dom";
import PassengerDetailCard from "./PassengerCard";
import { DatePicker } from "@mui/x-date-pickers";
import axios from "axios";
import isAdmin, { isGuest, logout } from "../utils/utils";

export default function SeatBooking() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const init_seat = [{ id: 1, seat_no: 'A1', is_selected: false },
  { id: 2, seat_no: 'A2', is_selected: true },
  { id: 3, seat_no: 'A3', is_selected: true },
  { id: 4, seat_no: 'A4', is_selected: true },
  { id: 5, seat_no: 'A5', is_selected: false },
  { id: 6, seat_no: 'A6', is_selected: false },
  { id: 7, seat_no: 'A7', is_selected: false },
  { id: 8, seat_no: 'A8', is_selected: false },
  { id: 9, seat_no: 'A9', is_selected: false },
  { id: 10, seat_no: 'A10', is_selected: false },
  { id: 11, seat_no: 'A11', is_selected: false },
  { id: 12, seat_no: 'A12', is_selected: false },
  { id: 13, seat_no: 'A13', is_selected: false },
  { id: 14, seat_no: 'A14', is_selected: false },
  { id: 15, seat_no: 'A15', is_selected: false },
  { id: 16, seat_no: 'A16', is_selected: false },
  { id: 17, seat_no: 'A17', is_selected: false },
  { id: 18, seat_no: 'A18', is_selected: false },
  { id: 19, seat_no: 'A19', is_selected: false },
  { id: 20, seat_no: 'A20', is_selected: false },
  { id: 21, seat_no: 'A21', is_selected: false },
  { id: 22, seat_no: 'A22', is_selected: false },
  { id: 23, seat_no: 'A23', is_selected: false },
  { id: 24, seat_no: 'A24', is_selected: false },
  { id: 25, seat_no: 'A25', is_selected: false },
  { id: 26, seat_no: 'A26', is_selected: false },
  { id: 27, seat_no: 'A27', is_selected: false },
  { id: 28, seat_no: 'A28', is_selected: false },
  { id: 29, seat_no: 'A29', is_selected: false },
  { id: 30, seat_no: 'A30', is_selected: false },

  ]

  const [seats, setSeates] = useState(init_seat);
  const [platinumSeats, setPlatinumSeats] = useState([]);
  const [businessSeats, setBusinessSeats] = useState([]);
  const [economySeats, setEconomySeats] = useState([]);
  const [bookedSeat, setBookedSeat] = useState('');
  const [travelClass, setTravelClass] = useState('');
  const navigate = useNavigate();

  const location = useLocation();

  const [flight, setFlight] = useState({});
  const [passengerDetails, setPassengerDetails] = useState({});

  useEffect(() => {
    setFlight(location.state.flight)
    setPassengerDetails(location.state.passengerDetails)
    // console.log("flight",location.state.flight)
    console.log("passengerDetails", location.state.passengerDetails)
    getSeatsFromDB(location.state.flight);

  }, []);

  function saveBooking() {
    console.log("flight", flight)

    console.log("passengerDetails", passengerDetails)
    console.log("isGUest", !isGuest())
    let userID = null;
    if(!isGuest()){
      userID= JSON.parse(localStorage.getItem("userDetails")).UserID
    }

    axios.post("/booking/bookTicket", {
      
      userID: userID,
      isGuest: isGuest() || !location.state.isAutoFill,

      flight: flight,
      passengerDetails: passengerDetails,
      seat: bookedSeat


    }).then((response) => {
      console.log("reponse", response);
      let data = response.data;
      localStorage.setItem("geustId", response.data.guest_id)
      navigate('/reviewAndPay', {
        state: {
          passengerDetails: passengerDetails,
          flight: flight,
          bookedSeat: bookedSeat,
          bookingDetails: response.data.booking_id,

          travelClass: travelClass

        }

      })
      // setBusinessSeats(data.Business);
      // setEconomySeats(data.Economy);
      // setPlatinumSeats(data.Platinum);

      // data.map((item) => {
      //   // add key id to each object
      //   item.id = item.seat_id;
      //   item.is_selected=item.is_selected===1?true:false;
      //   return item;
      // })

      // setSeates(response.data);
    });
  }



  function getSeatsFromDB(flight) {
    console.log("flight", flight)
    axios.get("/booking/seatList", {
      params: {
        flightId: flight.FlightID
      }
    }).then((response) => {
      console.log(response);
      let data = response.data;
      setBusinessSeats(data.Business);
      setEconomySeats(data.Economy);
      setPlatinumSeats(data.Platinum);

      // data.map((item) => {
      //   // add key id to each object
      //   item.id = item.seat_id;
      //   item.is_selected=item.is_selected===1?true:false;
      //   return item;
      // })

      // setSeates(response.data);
    });

  }
  return (


    <div>


      <Box sx={{ flexGrow: 1 }}>

        <AppBar position="static">
          <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              B Airways
            </Typography>

            <Button onClick={() => {
              navigate("/flightStatus")
            }} color="inherit" > Flight Status </Button>

            <Button onClick={() => {
              navigate("/reportGeneration")
            }} color="inherit" > {!isAdmin() ? "Admin" : ""} </Button>
            <Button onClick={() => {
              navigate("/loginPage")
            }}
              color="inherit">{isGuest() ? "Login" : ""}</Button>
            <Button color="inherit" onClick={() => {
              axios.post('/signUp/logout').then((response) => {
                logout();


                navigate("/loginPage")
              }
              )
            }}
            >
              {!isGuest() ? "Log Out" : ""}

            </Button>

          </Toolbar>
        </AppBar>
      </Box>


      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          minHeight: '100vh',
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: 'center',
        }}
      >

        <Paper elevation={3}>

          <>
            <div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>


              <h1 >Book Seat</h1>
            </div>
            <div style={{ margin: 40 }}>

              <FormControl component="fieldset">
                <FormLabel component="legend">Platinum Class - USD $  {flight.PlatinumPrice}</FormLabel>
                <FormGroup aria-label="position" row>




                  {platinumSeats.map((seat, index) => {
                    return (
                      <FormControlLabel
                        key={index}
                        value="top"
                        control={<Checkbox disabled={!seat.Availability} checked={bookedSeat === seat.SeatID ? true : false} icon={<ChairIcon />} checkedIcon={<ChairIcon />}
                        />}

                        onChange={(e) => {

                          setBookedSeat(seat.SeatID);
                          setTravelClass('Platinum');





                        }}
                        label={seat.seat_no}
                        labelPlacement="bottom"
                      />
                    )
                  })}

                </FormGroup>
              </FormControl>

            </div>

            <div style={{ margin: 40 }}>

              <FormControl component="fieldset">
                <FormLabel component="legend">Business Class -  USD $ {flight.BusinessPrice}</FormLabel>
                <FormGroup aria-label="position" row>




                  {businessSeats.map((seat, index) => {
                    return (
                      <FormControlLabel
                        key={index}
                        value="top"
                        control={<Checkbox disabled={!seat.Availability} checked={bookedSeat === seat.SeatID ? true : false} icon={<ChairIcon />} checkedIcon={<ChairIcon />}
                        />}

                        onChange={(e) => {

                          setBookedSeat(seat.SeatID);
                          setTravelClass(seat.TravelClass);






                        }}
                        label={seat.seat_no}
                        labelPlacement="bottom"
                      />
                    )
                  })}

                </FormGroup>
              </FormControl>

            </div>
            <div style={{ margin: 40 }}>

              <FormControl component="fieldset">
                <FormLabel component="legend">Economy Class  -  USD $ {flight.EconomyPrice}</FormLabel>
                <FormGroup aria-label="position" row>



                  {economySeats.map((seat, index) => {
                    return (
                      <FormControlLabel
                        key={index}
                        value={seat.seatID}
                        control={<Checkbox disabled={!seat.Availability} checked={bookedSeat === seat.SeatID ? true : false} icon={<ChairIcon />} checkedIcon={<ChairIcon />}
                        />}

                        onChange={(e) => {


                          setBookedSeat(seat.SeatID);
                          setTravelClass(seat.TravelClass);





                        }}
                        label={seat.seat_no}
                        labelPlacement="bottom"
                      />
                    )
                  })}

                </FormGroup>
              </FormControl>

            </div>
            <Button
              fullWidth={true}



              onClick={() => {

                if (bookedSeat === '') {
                  alert("Please select a seat");
                  return;
                }
                localStorage.setItem("seat", JSON.stringify(bookedSeat))

                saveBooking();


              }}>


              Book and Proceedd to Review
            </Button>
          </>
        </Paper>

      </Box>

    </div>
  )
}