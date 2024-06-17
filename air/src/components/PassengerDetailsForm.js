import { AppBar, Box, Button, Fab, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, Paper, Radio, RadioGroup, Select, TextField, Toolbar, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import img from '../image/airline.jpg';
import AddIcon from '@mui/icons-material/Add';
import { useHistory, useLocation, useNavigate } from "react-router-dom";
import PassengerDetailCard from "./PassengerCard";
import { DatePicker } from "@mui/x-date-pickers";
import isAdmin, { isGuest, logout } from "../utils/utils";
import axios from "axios";

import dayjs from 'dayjs';
export default function PassengerDetailsForm() {
  const [passengers, setPassengers] = useState([{}]);
  const [passengerDetails, setPassengerDetails] = useState({ FirstName: null, LastName: null, Nationality: null, ContactNumber1: null, EmailAddress: null, PassportNumber: null, ContactNumber2: null });
  const { dataOfBirth, setDateOfBirth } = useState({});
  const [error, setError] = useState({ FirstName: false, LastName: false, Nationality: false, ContactNumber1: false, EmailAddress: false, PassportNumber: false });

const [isAutoFill,setIsAutoFill]=useState(false)
  const [flight, setFlight] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  function validateInput() {
    let e = error
    console.log("passenger name", passengerDetails.FirstName === null || passengerDetails.FirstName === '');


    if (passengerDetails.FirstName === null || passengerDetails.FirstName === '') {
      e = { ...e, FirstName: true }
      console.log("erro 32", e);

    }

    if (passengerDetails.LastName === null || passengerDetails.LastName === '') {
      e = { ...e, LastName: true }
    }


    if (passengerDetails.ContactNumber1 === null || passengerDetails.ContactNumber1 === '') {
      e = { ...e, ContactNumber1: true }
    }



    if (passengerDetails.EmailAddress === null || passengerDetails.EmailAddress === '') {
      e = { ...e, EmailAddress: true }
    }


    if (passengerDetails.PassportNumber === null || passengerDetails.PassportNumber === '') {
      e = { ...e, PassportNumber: true }
    }

    if (passengerDetails.DateOfBirth === null || passengerDetails.DateOfBirth === '') {
      setError({ ...error, DateOfBirth: true })
    }

    console.log("error", e, "passengerDetails", passengerDetails);
    setError(e);
    if (e.ContactNumber1 || e.EmailAddress || e.Nationality || e.PassportNumber || e.FirstName || e.LastName || e.DateOfBirth) {

      return false;
    }
    else {
      return true;
    }


  }
 //handle date inputs separately
 function handleDateChange(date) {
  // Update the dateofBirth property in the registrationDetails state
  const isoDate = date.format();
  setPassengerDetails({ ...passengerDetails, DateOfBirth: isoDate });
  console.log("Selected Date:", date.toISOString());
}

  function handleChange(event) {

    // console.log("event",event);


    setPassengerDetails({ ...passengerDetails, [event.target.name]: event.target.value });
    setError({ ...error, [event.target.name]: false });
    console.log("passenegers", passengerDetails);
  }

  useEffect(() => {

    setFlight(location.state.flight)
  }, []);

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
            }} color="inherit" > {isAdmin() ? "Admin" : ""} </Button>
            <Button onClick={() => {
              navigate("/loginPage")
            }}
              color="inherit"> {isGuest() ? "Login" : ""}</Button>
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


              <h1 >Fill Passenger details {!isGuest()? <Button variant="contained" color="success" onClick={() => {
                setIsAutoFill(true)
                setPassengers([...passengers, {}])
                // console.log(passengers);
                let userDetails = JSON.parse(localStorage.getItem("userDetails"));
                console.log(userDetails);
                setPassengerDetails(userDetails)
              }

              }>Auto Fill</Button> : null}</h1>


            </div>
            <div style={{ margin: 40 }}>
              <div >
                <TextField onChange={handleChange}
                  error={error.FirstName}

                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={passengerDetails.FirstName} id="firstName" name="FirstName" label="first name" variant="outlined" />
                <TextField
                  error={error.LastName}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange} value={passengerDetails.LastName} style={{ marginLeft: 20 }} name="LastName" id="lastName" label="last name" variant="outlined" />
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={error.PassportNumber}
                  onChange={handleChange} value={passengerDetails.PassportNumber} style={{ marginLeft: 20 }} name="PassportNumber" id="lastName" label="Passport Number" variant="outlined" />



                <FormControl style={{
                  marginLeft: 20,
                  marginRight: 20
                }}>



                  <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={passengerDetails.Nationality ? passengerDetails.Nationality : "Sri Lankan"}
                    label="Nationality"
                    onChange={handleChange}
                    name="Nationality"

                  >
                    <MenuItem value={"Sri Lankan"}>Sri Lankan</MenuItem>
                    <MenuItem value={"Indian"}>Indian</MenuItem>
                    <MenuItem value={"British"}>Canadian</MenuItem>
                  </Select>
                </FormControl>
                <DatePicker
                  style={{ marginLeft: 20 }}
                  name="dateOfBirth"
                  value={dayjs(passengerDetails.DateOfBirth)}
                  error={error.DateOfBirth}

                  onChange= {(date) => handleDateChange(date)}                  label="DateOfBirth" />
              </div>
              <div style={{ marginTop: 10 }}>

                <TextField id="outlined-basic" InputLabelProps={{
                  shrink: true,
                }}
                  error={error.EmailAddress}
                  onChange={handleChange} value={passengerDetails.EmailAddress} name="EmailAddress" label="Email Address" variant="outlined" />

                <TextField onChange={handleChange}

                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={error.ContactNumber1}
                  value={passengerDetails.ContactNumber1} style={{ marginLeft: 20 }} id="firstName" name="ContactNumber1" label="ContactNumber1" variant="outlined" />
                <TextField onChange={handleChange}

                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={error.ContactNumber1}
                  value={passengerDetails.ContactNumber2} style={{ marginLeft: 20 }} id="firstName" name="ContactNumber2" label="ContactNumber 2" variant="outlined" />


              </div>
            </div>
            <Button
              fullWidth={true}




              onClick={() => {
                if (!validateInput()) {
                  return;
                }


                localStorage.setItem("passengerDetails", JSON.stringify(passengerDetails))


                navigate('/seatBooking', {
                  state: {
                    passengerDetails: passengerDetails,
                    flight: flight,
                    isAutoFill:isAutoFill
                  }
                })

              }}>


              Continue
            </Button>


          </>
        </Paper>
      </Box>





    </div>
  );

}

