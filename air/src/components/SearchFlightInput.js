import { Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import dayjs from "dayjs";
import MenuIcon from '@mui/icons-material/Menu';
import img from '../image/airline.jpg';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker, DateRangePicker } from '@mui/x-date-pickers/DatePicker';
import axios from "axios";
import { DataGrid, GridColDef, GridToolbarContainer, GridValueGetterParams, useGridApiContext } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import isAdmin, { isGuest, logout } from "../utils/utils";
export default function SearchFlightInput() {

  const [data, setData] = useState({});

  const [countries, setCountries] = useState([]);

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [departureDate, setDepartureDate] = useState({});
  const [arrivalDate, setArrivalDate] = useState({});
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState({ origin: false, destination: false, departureDate: false });
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("username"));
    localStorage.removeItem("seat")

    if (!localStorage.getItem("userDetails") && !isGuest()) {
      navigate("/loginPage");
    }




    axios.get("/booking/airports").then((response) => {
      console.log(response);

      let data = response.data;
      let countries = [];

      countries = data.map((item) => {
        return {
          value: item.airportcode,
          label: <><p style={{ margin: 0 }}>
            <p style={{ fontWeight: 'bold', margin: 0, marginTop: 20 }}>{item.cityname} - {item.countryname}</p><br /><p style={{ fontSize: 15, margin: 0, marginTop: -20 }}>{item.airportname}   {"(" + item.airportcode + ")"}</p></p></>
        }
      })

      setCountries(countries);
    }
    );
  }, [])



  const columns = [

    { field: 'FlightNumber', headerName: 'Flight Number', width: 130 },
    { field: 'id', headerName: 'AircraftID:', width: 100 },


    { field: 'Origin', headerName: 'origin', width: 100 },
    { field: 'Destination', headerName: 'Destination', width: 100 },

    { field: 'DepartureDateTime', headerName: 'Departure Time', width: 250 },

    { field: 'ArrivalDateTime', headerName: 'Arrival Time', width: 100 },
    { field: 'PlatinumPrice', headerName: 'Platinum Price', width: 100 },
    { field: 'BusinessPrice', headerName: 'Business Price', width: 100 },
    { field: 'EconomyPrice', headerName: 'EconomyPrice', width: 250 },


    // {
    //   field: 'departure',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 90,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  function validateInput() {
    let error = { origin: false, destination: false, departureDate: false };
    if (from === null) {
      error.origin = true;

    }
    if (to === null) {
      error.destination = true;

    }
    if (departureDate === null) {
      error.departureDate = true;

    }
    setError(error);

    if (error.origin || error.destination || error.departureDate) {
      return false;
    }
    else {
      return true;
    }


  }


  function getFlights() {
    console.log("from ", from, "to ", to, "departureDate ", departureDate);
    let date = new Date(departureDate);
    console.log("date", date)
    date.setDate(date.getDate() + 1);
    axios.get("/booking/flight", {
      params: {
        from: from,
        to: to,
        departureDate: date.toISOString().slice(0, 10)
      }
    }).then((response) => {
      console.log(response);
      let data = response.data;
      data.map((item) => {
        // add key id to each object
        item.ArrivalDateTime = new Date(item.ArrivalDateTime).toDateString().slice(0, 10) + " - " + new Date(item.ArrivalDateTime).toLocaleTimeString() + " (IST)";
        item.DepartureDateTime = new Date(item.DepartureDateTime).toDateString().slice(0, 10) + " - " + new Date(item.DepartureDateTime).toLocaleTimeString() + " (IST)";
        item.id = item.AircraftID;
        item.Origin = item.Origin
        return item;
      })

      setData(response.data);
    });

  }

  function CustomFooter() {
    if (selected !== null) {
      return (

        <Button



          onClick={() => {
            ''

            if (selected === null) {
              return
            }

            localStorage.setItem("passengerDetails", null)

            navigate("/passengerDetails", {


              state: {
                flight: selected
              }
            })
          }}>


          Continue
        </Button>
      )
    }
  }
  return (

    <div>

      <Box sx={{ flexGrow: 1 }}>

        <AppBar position="static">
          <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              B Airways
            </Typography>
            <Typography style={{ marginLeft: 500 }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome {localStorage.getItem("userName") != '' ? localStorage.getItem("userName") : ""}
            </Typography>
            <Button onClick={() => {
              navigate("/flightStatus")
            }} color="inherit" > Flight Status </Button>
            {isAdmin() ? <Button onClick={() => {
              navigate("/reportGeneration")
            }} color="inherit" > Admin</Button> : null}
            <Button onClick={() => {
              navigate("/loginPage")
            }}
              color="inherit"> {isGuest() ? "Login" : ""}</Button>
            {!isGuest() ? <Button color="inherit" onClick={() => {
              axios.post('/signUp/logout').then((response) => {
                console.log(response);
                logout();

                navigate("/loginPage")
              }
              )
            }}
            >
              Log Out

            </Button> : null}

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

        <Paper elevation={3}

          style={{ marginTop: 0 }}
        >


          <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>


            <h1 >Search Flight</h1></div>
            <div>
              <TextField
                sx={{ marginLeft: 2 }}
                id="outlined-select-currency"
                error={error.origin}
                select
                onChange={(e) => {
                  setFrom(e.target.value)
                  setError({ ...error, origin: false })
                  console.log(e.target.value)
                }}
                label="from"
                defaultValue="BIA  (Sri Lanka)"
                helperText="Please select your origin"
              >
                {countries.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                onChange={(e) => {
                  setTo(e.target.value)
                  setError({ ...error, destination: false })

                  console.log(e.target.value)
                }}
                sx={{ marginLeft: 2, marginRight: 2 }}
                id="outlined-select-currency"
                select
                error={error.destination}

                label="to"
                defaultValue="BIA  (Sri Lanka)"
                helperText="Please select your destination"
              >
                {countries.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <DatePicker
                value={departureDate}
                error={false}
                defaultValue={dayjs('2022-07-17')}
                minDate={dayjs(new Date ().toLocaleDateString())}





                onChange={(e) => {
                  setError({ ...error, departureDate: false })

                  setDepartureDate(e);
                  console.log(e)
                }}
                sx={{ marginRight: 2 }} label="Departure Date" />
              {/* <DatePicker

                onChange={(e) => {
                  setArrivalDate(e);
                  console.log(e)
                }}
                label="Arrival Date" /> */}
            </div>
            <div>


              <Button onClick={() => {
                if (!validateInput()) {
                  return
                };

                getFlights();

              }} style={{ marginLeft: 450, marginTop: 20, marginBottom: 20 }} variant="contained" startIcon={<SearchIcon />}>Search</Button>

            </div>
          </>

        </Paper>

        {data.length > 0 ?


          <Paper elevation={3}

            style={{ marginTop: 50 }}>

            <DataGrid

              rows={data.length > 0 ? data : []}
              columns={columns}
              style={{ border: 20 }}
              onRowClick={(e) => {

                console.log(e.row);
                setSelected(e.row);
              }}

              slots={{
                footer: CustomFooter,
              }}
              initialState={{

                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}

              pageSizeOptions={[5, 10]}

            />
          </Paper>
          : null}



      </Box>


    </div>
  );
}

