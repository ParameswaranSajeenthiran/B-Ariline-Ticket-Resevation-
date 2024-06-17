import React, { useEffect, useState } from "react";
import { Paper, TextField } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import img from '../image/airline.jpg';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import isAdmin, { isGuest } from "../utils/utils";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function ReportGeneration() {
  const [value, setValue] = React.useState(0);
  const [flightnumber, setflightnumber] = useState(null);
  const [Origin, setOrigin] = useState(null);
  const [Destination, setDestination] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [totalPassengers, setTotalPassengers] = useState(' ');
  const [countries, setCountries] = useState([]);
  const [from, setFrom] = useState([]);
  const [selected, setSelected] = useState({});
  const navigate = useNavigate();
  const [data1_0, setData1_0] = useState({}); const [data1_1, setData1_1] = useState({}); const [data1_2, setData1_2] = useState({});
  const [data2_0, setData2_0] = useState({}); const [data2_1, setData2_1] = useState({});
  const [data3_1, setData3_1] = useState({}); const [data3_2, setData3_2] = useState({}); const [data3_3, setData3_3] = useState({}); const [data3_4, setData3_4] = useState({});
  const [data4_1, setData4_1] = useState({}); const [data4_2, setData4_2] = useState({}); const [data4_3, setData4_3] = useState({});
  const [data5_1, setData5_1] = useState({}); const [data5_2, setData5_2] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
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

  const columns1_0 = [
    { field: 'flightid', headerName: 'FlightID', width: 180 },
    { field: 'aircraftid', headerName: 'AircraftID', width: 180 },
    { field: 'Origin', headerName: 'Origin', width: 150 },
    { field: 'Destination', headerName: 'Destination', width: 200 },
    { field: 'DepartureDateTime', headerName: 'Departure Time', width: 500 },
    { field: 'ArrivalDateTime', headerName: 'Arrival Time', width: 450 }];

  const columns1_1 = [
    { field: 'ID', headerName: '#', width: 70 },
    { field: 'seatid', headerName: 'Seat Number', width: 200 },
    { field: 'passengerid', headerName: 'PassengerID', width: 200 },
    { field: 'firstname', headerName: 'First Name', width: 220 },
    { field: 'lastname', headerName: 'Last Name', width: 250 },
    { field: 'passportnumber', headerName: 'Passport Number', width: 250 },
    { field: 'dateofbirth', headerName: 'Date of Birth', width: 220 },
    { field: 'contactnumber1', headerName: 'Contact Number', width: 220 },
    { field: 'ContactNumber2', headerName: 'Contact Number', width: 200 }];

  const columns2_0 = [
    { field: 'flightid', headerName: 'FlightID', width: 120 },
    { field: 'flightnumber', headerName: 'Flight Number', width: 220 },
    { field: 'aircraftid', headerName: 'AircraftID', width: 180 },
    { field: 'passengers', headerName: 'Passengers', width: 180 },
    { field: 'ArrivalDateTime', headerName: 'Arrival Time', width: 375 }];

  const columns2_1 = [
    { field: 'total_passengers', headerName: '', width: 200 }];

  const columns3_0 = [
    { field: 'passengerid', headerName: 'PassengerID', width: 200 },
    { field: 'firstname', headerName: 'First Name', width: 220 },
    { field: 'lastname', headerName: 'Last Name', width: 220 },
    { field: 'nationality', headerName: 'Nationality', width: 180 },
    { field: 'passportnumber', headerName: 'Passport Number', width: 220 }];

  const columns3_1 = [
    { field: 'Gold', headerName: 'Gold', width: 150 },
    { field: 'Frequent', headerName: 'Frequent', width: 180 },
    { field: 'Guest', headerName: 'Guest', width: 150 }];

  const columns4_1 = [
    { field: 'flightid', headerName: 'FlightID', width: 140 },
    { field: 'aircraftid', headerName: 'AircraftID', width: 150 },
    { field: 'DepartureDateTime', headerName: 'Departure Time', width: 400 },
    { field: 'ArrivalDateTime', headerName: 'Arrival Time', width: 400 },
    { field: 'PassengerCount', headerName: 'Passenger Count', width: 220 }];

  const columns4_2 = [
    { field: 'flightnumber', headerName: 'Flight Number', width: 180 },
    { field: 'duration', headerName: 'Duration', width: 100 }];

  const columns4_3 = [
    { field: 'totalcount', headerName: 'Total Passenger Count', width: 200 }];

  const columns5_1 = [
    { field: 'Model', headerName: 'Model', width: 250 },
    { field: 'FleetSize', headerName: 'Fleet Size', width: 200 },
    { field: 'TotalFlights', headerName: 'Total Flights', width: 220 },
    { field: 'Revenue', headerName: 'Revenue (US$/Million)', width: 330 }];

  const columns5_2 = [
    { field: 'TotalFleetSize', headerName: 'Total Fleet Size', width: 150 },
    { field: 'TotalFlights', headerName: 'Total Flights', width: 150 },
    { field: 'TotalRevenue', headerName: 'Total Revenue', width: 150 }];

  function getFlightData() {
    console.log("flightnumber ", flightnumber);
    axios.get("/admin1.0", {
      params: {
        flightnumber: flightnumber
      }
    }).then((response) => {
      console.log("API Response:", response);
      let data1_0 = response.data;
      data1_0.map((item) => {
        item.DepartureDateTime = new Date(item.DepartureDateTime).toDateString().slice(0, 10) + " - " + new Date(item.DepartureDateTime).toLocaleTimeString() + " (IST)";
        item.ArrivalDateTime = new Date(item.ArrivalDateTime).toDateString().slice(0, 10) + " - " + new Date(item.ArrivalDateTime).toLocaleTimeString() + " (IST)";
        return item;
      })

      setData1_0(response.data);
    }).catch((error) => {
      console.error("API Error:", error);
    });;
    axios.get("/admin1.1", {
      params: {
        flightnumber: flightnumber
      }
    }).then((response) => {
      console.log("API Response:", response);
      let data1_1 = response.data;
      data1_1.map((item) => {
        item.dateofbirth = new Date(item.dateofbirth).toDateString().slice(4, 15);
        item.DepartureDateTime = new Date(item.DepartureDateTime).toDateString().slice(0, 10) + " - " + new Date(item.DepartureDateTime).toLocaleTimeString() + " (IST)";
        return item;
      })

      setData1_1(response.data);
    }).catch((error) => {
      console.error("API Error:", error);
    });;
    axios.get("/admin1.2", {
      params: {
        flightnumber: flightnumber
      }
    }).then((response) => {
      console.log("API Response:", response);
      let data1_2 = response.data;
      data1_2.map((item) => {
        item.dateofbirth = new Date(item.dateofbirth).toDateString().slice(4, 15);
        item.DepartureDateTime = new Date(item.DepartureDateTime).toDateString().slice(0, 10) + " - " + new Date(item.DepartureDateTime).toLocaleTimeString() + " (IST)";
        return item;
      })

      setData1_2(response.data);
    }).catch((error) => {
      console.error("API Error:", error);
    });;
  }

  function getDestinationData() {
    console.log("Destination ", Destination, "FromDate", fromDate, "toDate", toDate);
    let date1 = new Date(fromDate);
    date1.setDate(date1.getDate() + 1);
    let date2 = new Date(toDate);
    date2.setDate(date2.getDate() + 1);
    axios.get("/admin2", {
      params: {
        Destination: Destination,
        fromDate: date1.toISOString().slice(0, 10),
        toDate: date2.toISOString().slice(0, 10),
      }
    }).then((response) => {
      console.log("API Response:", response);
      let data2_0 = response.data;
      data2_0.map((item) => {
        item.ArrivalDateTime = new Date(item.ArrivalDateTime).toDateString().slice(0, 10) + " - " + new Date(item.ArrivalDateTime).toLocaleTimeString() + " (IST)";
        return item;
      })

      setData2_0(response.data);
    }).catch((error) => {
      console.error("API Error:", error);
    });;
    axios.get("/admin2.1", {
      params: {
        Destination: Destination,
        fromDate: date1.toISOString().slice(0, 10),
        toDate: date2.toISOString().slice(0, 10),
      }
    }).then((response) => {
      console.log("API Response:", response);
      setData2_1(response.data);
      setTotalPassengers(response.data.total_passengers);
    }).catch((error) => {
      console.error("API Error:", error);
    });;
  }

  function getPassengerData() {
    console.log("FromDate", fromDate, "toDate", toDate);
    let date1 = new Date(fromDate);
    date1.setDate(date1.getDate() + 1);
    let date2 = new Date(toDate);
    date2.setDate(date2.getDate() + 1);
    axios.get("/admin3.1", {
      params: {
        fromDate: date1.toISOString().slice(0, 10),
        toDate: date2.toISOString().slice(0, 10),
      }
    }).then((response) => {
      console.log("API Response:", response);
      setData3_1(response.data);
    }).catch((error) => {
      console.error("API Error:", error);
    });
    axios.get("/admin3.2", {
      params: {
        fromDate: date1.toISOString().slice(0, 10),
        toDate: date2.toISOString().slice(0, 10),
      }
    }).then((response) => {
      console.log("API Response:", response);
      setData3_2(response.data);
    }).catch((error) => {
      console.error("API Error:", error);
    });
    axios.get("/admin3.3", {
      params: {
        fromDate: date1.toISOString().slice(0, 10),
        toDate: date2.toISOString().slice(0, 10),
      }
    }).then((response) => {
      console.log("API Response:", response);
      setData3_3(response.data);
    }).catch((error) => {
      console.error("API Error:", error);
    });
    axios.get("/admin3.4", {
      params: {
        fromDate: date1.toISOString().slice(0, 10),
        toDate: date2.toISOString().slice(0, 10),
      }
    }).then((response) => {
      console.log("API Response:", response);
      setData3_4(response.data);
    }).catch((error) => {
      console.error("API Error:", error);
    });
  }

  function getRouteData() {
    console.log("Origin", Origin, "Destination ", Destination);
    axios.get("/admin4.1", {
      params: {
        Origin: Origin,
        Destination: Destination
      }
    }).then((response) => {
      console.log("API Response:", response);
      let data4_1 = response.data;
      data4_1.map((item) => {
        item.DepartureDateTime = new Date(item.DepartureDateTime).toDateString().slice(0, 10) + " - " + new Date(item.DepartureDateTime).toLocaleTimeString() + " (IST)";
        item.ArrivalDateTime = new Date(item.ArrivalDateTime).toDateString().slice(0, 10) + " - " + new Date(item.ArrivalDateTime).toLocaleTimeString() + " (IST)";
        return item;
      })

      setData4_1(response.data);
    }).catch((error) => {
      console.error("API Error:", error);
    });
    axios.get("/admin4.2", {
      params: {
        Origin: Origin,
        Destination: Destination
      }
    }).then((response) => {
      console.log("API Response:", response);
      setData4_2(response.data);
    }).catch((error) => {
      console.error("API Error:", error);
    });
    axios.get("/admin4.3", {
      params: {
        Origin: Origin,
        Destination: Destination
      }
    }).then((response) => {
      console.log("API Response:", response);
      setData4_3(response.data);
    }).catch((error) => {
      console.error("API Error:", error);
    });
  }

  function getRevenue() {
    console.log("Origin", Origin, "Destination ", Destination);
    axios.get("/admin5.1").then((response) => {
      console.log("API Response:", response);
      setData5_1(response.data);
    }).catch((error) => {
      console.error("API Error:", error);
    });
    axios.get("/admin5.2").then((response) => {
      console.log("API Response:", response);
      setData5_2(response.data);
    }).catch((error) => {
      console.error("API Error:", error);
    });
  }

  function CustomFooter() {
    return (null
      // <Button



      //   onClick={() => {
      //     navigate("/reportgeneration", {
      //       state: {
      //         flight: selected
      //       }
      //     })
      //   }}>


      //   Book and Continue
      // </Button>
    )
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>

        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              B Airways
            </Typography>
            <Typography style={{ marginLeft: 500 }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome {localStorage.getItem("userName") != '' ? localStorage.getItem("userName") : ""}
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
                console.log(response);
                localStorage.setItem("passengerDetails", null)
                localStorage.setItem("userName", '')
                localStorage.setItem('guestId', '')
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
          minHeight: '0vh',
          // backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: 'center',
        }}
      >
        <Paper elevation={3}

          style={{ marginTop: 0 }}
        >


          <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Flight Analysis" {...a11yProps(0)} />
                <Tab label="Destination Analysis" {...a11yProps(1)} />
                <Tab label="Booking Analysis" {...a11yProps(2)} />
                <Tab label="Route Analysis" {...a11yProps(3)} />
                <Tab label="Revenue Analysis" {...a11yProps(4)} />
              </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
              <div>
                <div >

                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    style={{ marginBottom: -20 }}
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      // fontFamily: 'roboto',
                      fontWeight: 200,
                      letterSpacing: '.05rem',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    <div>Enter Flight Number to get Passenger Statistics for the next immediate Flight for the given Flight Number.</div>
                  </Typography>
                  <TextField style={{ marginTop: 50, marginLeft: 300 }} onChange={(e) => {
                    setflightnumber(e.target.value)
                    console.log(e.target.value)
                  }}
                    id="outlined-select-currency" name="flightnumber" label="Enter Flight Number" variant="outlined" /></div></div>
              <Button onClick={() => {
                getFlightData();
              }} style={{ marginLeft: 700, marginTop: -80 }} variant="contained" startIcon={<SearchIcon />}>Search</Button>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div style={{ marginLeft: 20, marginTop: 20 }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  style={{ marginTop: -23, marginBottom: -50 }}
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    // fontFamily: 'monospace',
                    fontWeight: 200,
                    letterSpacing: '.05rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  <div>Enter Destination and a Date Range to get Travel Statistics for given Destination for given Date Range.</div>
                </Typography>
                <TextField
                  sx={{ marginLeft: 2, marginTop: 8 }}
                  id="outlined-select-currency"
                  select
                  onChange={(e) => {
                    setDestination(e.target.value)
                    console.log(e.target.value)
                  }}
                  label="destination"
                  defaultValue="BIA  (Sri Lanka)"
                  helperText="select destination"
                >
                  {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <DatePicker
                  value={fromDate}
                  onChange={(e) => {
                    setFromDate(e);
                    console.log(e)
                  }}
                  sx={{ marginLeft: '50px', marginTop: '64px' }} label="Form" />
                <DatePicker
                  value={toDate}
                  onChange={(e) => {
                    setToDate(e);
                    console.log(e)
                  }}
                  sx={{ marginLeft: 5, marginTop: 8 }} label="Until" />
                <Button onClick={() => {
                  getDestinationData();
                }} style={{ marginLeft: -350, marginTop: 140 }} variant="contained" startIcon={<SearchIcon />}>Search</Button></div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <div>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  style={{ marginBottom: -50 }}
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    // fontFamily: 'monospace',
                    fontWeight: 200,
                    letterSpacing: '.05rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  <div>Enter a Date Range to analyze Booking Statistics based on User Types for given Date Range.</div>
                </Typography>
                <DatePicker
                  value={fromDate}
                  onChange={(e) => {
                    setFromDate(e);
                    console.log(e)
                  }}
                  sx={{ marginRight: 5, marginLeft: 10, marginTop: 10 }} label="Form" />
                <DatePicker
                  value={toDate}
                  onChange={(e) => {
                    setToDate(e);
                    console.log(e)
                  }}
                  sx={{ marginTop: 10 }} label="Until" />
                <Button onClick={() => {
                  getPassengerData();
                }} style={{ marginLeft: 50, marginTop: 90 }} variant="contained" startIcon={<SearchIcon />}>Search</Button></div>

            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <div>
                <div><Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  style={{ marginBottom: -20 }}
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    // fontFamily: 'monospace',
                    fontWeight: 200,
                    letterSpacing: '.05rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}>Enter an Origin and a Destination to get Past Flight Statistics & Passenger Count for the given Route.
                </Typography></div>
                <TextField
                  sx={{ marginLeft: 10, marginTop: 5 }}
                  id="outlined-select-currency"
                  select
                  onChange={(e) => {
                    setOrigin(e.target.value)
                    console.log(e.target.value)
                  }}
                  label="origin"
                  defaultValue="BIA  (Sri Lanka)"
                  helperText="select origin airport"
                >
                  {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  sx={{ marginLeft: '50px', marginTop: '40px' }}
                  id="outlined-select-currency"
                  select
                  onChange={(e) => {
                    setDestination(e.target.value)
                    console.log(e.target.value)
                  }}
                  label="destination"
                  defaultValue="BIA  (Sri Lanka)"
                  helperText="select destination airport"
                >
                  {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <Button onClick={() => {
                  getRouteData();
                }} style={{ marginLeft: 50, marginTop: 50 }} variant="contained" startIcon={<SearchIcon />}>Search</Button></div>

            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <div><Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                style={{ marginBottom: -20 }}
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  // fontFamily: 'monospace',
                  fontWeight: 200,
                  letterSpacing: '.05rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}>Press Search to view Revenue Statistics. This will include a Revenue analysis based on Aircraft Type.
              </Typography></div>
              <Button onClick={() => {
                getRevenue();
              }} style={{ marginLeft: '430px', marginTop: 50 }} variant="contained" startIcon={<SearchIcon />}>Search</Button>
            </CustomTabPanel>
          </div></>
        </Paper>
      </Box>
      {value === 0 && data1_0.length > 0 ?
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            minHeight: '0vh',
            // backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'center',
          }}
        >
          <Paper elevation={0}

            style={{ marginTop: 0 }}
          >


            <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
              <Typography variant="h4" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Calibri',
                fontWeight: 'bold',
                letterSpacing: '.05rem',
                color: 'grey',
                textDecoration: 'none',
              }}><div style={{ marginBottom: 30, marginLeft: '5px', marginRight: 'auto', width: 'fit-content' }}>Flight Details</div></Typography>
              <DataGrid

                rows={data1_0.length > 0 ? data1_0 : []}
                columns={columns1_0}
                getRowId={(row) => row.flightid}
                style={{ border: 20, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', fontSize: '25px', fontWeight: 'bold', color: 'rgba(30, 150, 150, 0.7)' }}
                onRowClick={(e) => {

                  console.log(e.row);
                  setSelected(e.row);
                }}

                slots={{

                  footer: CustomFooter
                }}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}

                pageSizeOptions={[5, 10]}
              />

            </div></>
          </Paper>


        </Box>
        : null}

      {value === 0 && data1_1.length > 0 ?
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            minHeight: '0vh',
            // backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'center',
          }}
        >
          <Paper elevation={0}

            style={{ marginTop: 0 }}
          >
            <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
              <Typography variant="h4" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Calibri',
                fontWeight: 'bold',
                letterSpacing: '.05rem',
                color: 'grey',
                textDecoration: 'none',
              }}><div style={{ marginBottom: 30, marginLeft: '5px', marginRight: 'auto', width: 'fit-content' }}>Passengers over 18 years</div></Typography>
              <DataGrid

                rows={data1_1.length > 0 ? data1_1 : []}
                columns={columns1_1}
                getRowId={(row) => row.ID}
                style={{ border: 20, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', maxHeight: '400px', fontSize: '25px', fontWeight: 'bold', color: 'rgba(30, 100, 150, 0.7)' }}
                onRowClick={(e) => {

                  console.log(e.row);
                  setSelected(e.row);
                }}

                slots={{
                  footer: CustomFooter
                }}
                initialState={{

                  // pagination: {
                  //   paginationModel: { page: 0, pageSize: 5 },
                  // },
                }}

                pageSizeOptions={[5, 10]}

              />    </div></>
          </Paper>
        </Box>
        : null}
      {value === 0 && data1_2.length > 0 ?
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            minHeight: '100vh',
            // backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'center',
          }}
        >
          <Paper elevation={0}

            style={{ marginTop: 0 }}
          >


            <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
              <Typography variant="h4" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Calibri',
                fontWeight: 'bold',
                letterSpacing: '.05rem',
                color: 'grey',
                textDecoration: 'none',
              }}><div style={{ marginBottom: 30, marginLeft: '5px', marginRight: 'auto', width: 'fit-content' }}>Passengers under 18 years</div></Typography>
              <DataGrid

                rows={data1_2.length > 0 ? data1_2 : []}
                columns={columns1_1}
                getRowId={(row) => row.ID}
                style={{ border: 20, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', maxHeight: '400px', fontSize: '25px', fontWeight: 'bold', color: 'rgba(30, 150, 150, 0.7)' }}
                onRowClick={(e) => {

                  console.log(e.row);
                  setSelected(e.row);
                }}

                slots={{
                  footer: CustomFooter,
                }}
                initialState={{

                  // pagination: {
                  //   paginationModel: { page: 0, pageSize: 5 },
                  // },
                }}

                pageSizeOptions={[5, 10]}

              /> </div></> </Paper>
        </Box>
        : null}

      {value === 1 && data2_0.length>0 ?                
                <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '20px',
                  minHeight: '0vh',
                  // backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPositionY: 'center',
                }}
              >
              <Paper elevation={0}

            style={{ marginTop: 0 }}
          >


            <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
              <Typography variant="h4" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Calibri',
                fontWeight: 'bold',
                letterSpacing: '.05rem',
                color: 'grey',
                textDecoration: 'none',
              }}><div style={{ marginBottom: 30, marginLeft: '5px', marginRight: 'auto', width: 'fit-content' }}>Flights Incoming to Destination during given Date Range</div></Typography>
              <DataGrid

                rows={data2_0.length > 0 ? data2_0 : []}
                columns={columns2_0}
                getRowId={(row) => row.flightid}
                style={{ border: 20, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', maxHeight: '400px', fontSize: '25px', fontWeight: 'bold', color: 'rgba(160, 40, 120, 0.5)' }}
                onRowClick={(e) => {

                  console.log(e.row);
                  setSelected(e.row);
                }}

                slots={{
                  footer: CustomFooter,
                }}
                initialState={{

                  // pagination: {
                  //   paginationModel: { page: 0, pageSize: 5 },
                  // },
                }}

                pageSizeOptions={[5, 10]}

              />
         </div></>     </Paper>
        </Box>  :null} 
      {value === 1 && data2_0.length>0 ?    
       <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      minHeight: '100vh',
      // backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPositionY: 'center',
    }}
  >
                 <Paper elevation={0}

            style={{ marginTop: 50 }}
          >


            <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
              <Typography variant="h4" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Calibri',
                fontWeight: 'bold',
                letterSpacing: '.05rem',
                color: 'grey',
                textDecoration: 'none',
              }}><div style={{ marginBottom: 30, marginLeft: '5px', marginRight: 'auto', width: 'fit-content' }}
              >Total Passengers traveling to Destination</div>
                <div style={{ marginTop: 50, marginLeft: '-835px', marginRight: 'auto', width: 'fit-content' }}
                >During Given Date Range</div></Typography>
              <div style={{ marginTop: -50, marginLeft: 520, marginRight: 'auto', width: 'fit-content', fontSize: '200px', color: 'rgba(160, 40, 120, 0.7)' }}>{data2_1[0] && data2_1[0].total_passengers !== null ? data2_1[0].total_passengers : '0'}</div>
            </div></> </Paper>

        </Box>
        : null}

          {value === 2 && data3_1.length>0 ?   
            <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
              minHeight: '0vh',
              // backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPositionY: 'center',
            }}
          >             
              
              <Paper elevation={0}

            style={{ marginTop: 0 }}
          >


            <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
              <Typography variant="h4" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Calibri',
                fontWeight: 'bold',
                letterSpacing: '.05rem',
                color: 'grey',
                textDecoration: 'none',
              }}><div style={{ marginBottom: 30, marginLeft: '5px', marginRight: 'auto', width: 'fit-content' }}
              >USER TYPE : GOLD</div></Typography>
              <DataGrid

                rows={data3_1.length > 0 ? data3_1 : []}
                columns={columns3_0}
                getRowId={(row) => row.passengerid}
                style={{ border: 20, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', maxHeight: '400px', fontSize: '25px', fontWeight: 'bold', color: 'rgba(130, 120, 20, 0.5)' }}
                onRowClick={(e) => {

                  console.log(e.row);
                  setSelected(e.row);
                }}

                slots={{
                  footer: CustomFooter,
                }}
                initialState={{

                  // pagination: {
                  //   paginationModel: { page: 0, pageSize: 5 },
                  // },
                }}

                pageSizeOptions={[5, 10]}

              /></div></>
              </Paper>
              </Box>
          :null} 
          {value === 2 && data3_2.length>0 ?                
  <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    minHeight: '0vh',
    // backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'center',
  }}
>
<Paper elevation={0}

            style={{ marginTop: 0 }}
          >


            <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
              <Typography variant="h4" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Calibri',
                fontWeight: 'bold',
                letterSpacing: '.05rem',
                color: 'grey',
                textDecoration: 'none',
              }}><div style={{ marginBottom: 30, marginLeft: '5px', marginRight: 'auto', width: 'fit-content' }}
              >USER TYPE : FREQUENT</div></Typography>
              <DataGrid

                rows={data3_2.length > 0 ? data3_2 : []}
                columns={columns3_0}
                getRowId={(row) => row.passengerid}
                style={{ border: 20, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', maxHeight: '400px', fontSize: '25px', fontWeight: 'bold', color: 'rgba(80, 100, 20, 0.7)' }}
                onRowClick={(e) => {

                  console.log(e.row);
                  setSelected(e.row);
                }}

                slots={{
                  footer: CustomFooter,
                }}
                initialState={{

                  // pagination: {
                  //   paginationModel: { page: 0, pageSize: 5 },
                  // },
                }}

                pageSizeOptions={[5, 10]}

              />
            </div></>
          </Paper>
        </Box>
        :null}
        {value === 2 && data3_3.length>0 ?                
  <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    minHeight: '100vh',
    // backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'center',
  }}
>
<Paper elevation={0}

            style={{ marginTop: 0 }}
          >


            <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
              <Typography variant="h4" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Calibri',
                fontWeight: 'bold',
                letterSpacing: '.05rem',
                color: 'grey',
                textDecoration: 'none',
              }}><div style={{ marginBottom: 30, marginLeft: '5px', marginRight: 'auto', width: 'fit-content' }}
              >USER TYPE : GUEST</div></Typography>
              <DataGrid

                rows={data3_3.length > 0 ? data3_3 : []}
                columns={columns3_0}
                getRowId={(row) => row.passengerid}
                style={{ border: 20, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', maxHeight: '400px', fontSize: '25px', fontWeight: 'bold', color: 'rgba(120, 150, 70, 0.8)' }}
                onRowClick={(e) => {

                  console.log(e.row);
                  setSelected(e.row);
                }}

                slots={{
                  footer: CustomFooter,
                }}
                initialState={{

                  // pagination: {
                  //   paginationModel: { page: 0, pageSize: 5 },
                  // },
                }}

                pageSizeOptions={[5, 10]}

              />
            </div></>
          </Paper>
        </Box>
        :null}
        {value === 2 && data3_4.length>0 ?                
  <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    minHeight: '10vh',
    // backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'center',
  }}
>
<Paper elevation={0}

style={{ marginTop: -500 }}
>


            <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
              <Typography variant="h4" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Calibri',
                fontWeight: 'bold',
                letterSpacing: '.05rem',
                color: 'grey',
                textDecoration: 'none',
              }}><div style={{ marginTop: -100, marginLeft: '-270px', marginRight: 'auto', width: 'fit-content' }}
              >SUMMARY</div>
                <div style={{ marginBottom: 30, marginLeft: '-40px', marginRight: 'auto', width: 'fit-content', color: 'rgba(100, 100, 20, 0.8)' }}
                >GOLD</div>
                <div style={{ marginBottom: 30, marginLeft: '425px', marginRight: 'auto', width: 'fit-content', color: 'rgba(70, 100, 20, 0.8)' }}
                >FREQUENT</div>
                <div style={{ marginBottom: 30, marginLeft: '365px', marginRight: 'auto', width: 'fit-content', color: 'rgba(80, 150, 20, 0.5)' }}
                >GUEST</div></Typography>
              <div style={{ marginTop: -50, marginLeft: 50, marginRight: 'auto', width: 'fit-content', fontSize: '200px', color: 'rgba(100, 100, 20, 0.8)' }}>{data3_4[0].Gold}</div>
              <div style={{ marginTop: -270, marginLeft: 550, marginRight: 'auto', width: 'fit-content', fontSize: '200px', color: 'rgba(70, 100, 20, 0.8)' }}>{data3_4[0].Frequent}</div>
              <div style={{ marginTop: -270, marginLeft: 1200, marginRight: 'auto', width: 'fit-content', fontSize: '200px', color: 'rgba(80, 150, 20, 0.5)' }}>{data3_4[0].Guest}</div>

            </div></>
          </Paper>
        </Box>
        : null}

    {value === 3 && data4_1.length>0 ?                
        
        <Paper elevation={0}

          style={{ marginTop: 0 }}
        >


          <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>   <Typography variant="h4" sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'Calibri',
            fontWeight: 'bold',
            letterSpacing: '.05rem',
            color: 'grey',
            textDecoration: 'none',
          }}><div style={{ marginBottom: 30, marginLeft: '5px', marginRight: 'auto', width: 'fit-content' }}
          >Flights which travelled the given Route in the Past</div></Typography>
            <DataGrid

              rows={data4_1.length > 0 ? data4_1 : []}
              columns={columns4_1}
              getRowId={(row) => row.flightid}
              style={{ border: 20, marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', maxHeight: '400px', fontSize: '25px', fontWeight: 'bold', color: 'rgba(50, 95, 30, 0.7)' }}
              onRowClick={(e) => {

                console.log(e.row);
                setSelected(e.row);
              }}

              slots={{
                footer: CustomFooter,
              }}
              initialState={{

                // pagination: {
                //   paginationModel: { page: 0, pageSize: 5 },
                // },
              }}

              pageSizeOptions={[5, 10]}

            />
          </div></> </Paper>
        : null}
      {value === 3 && data4_2.length > 0 ?

<Paper elevation={0}

style={{ marginTop: 50 }}
>


<><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
          <Typography variant="h4"  sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Calibri',
                  fontWeight: 'bold',
                  letterSpacing: '.05rem',
                  color: 'grey',
                  textDecoration: 'none',
                }}><div style={{ marginBottom: 30, marginLeft: '5px', marginRight: 'auto', width: 'fit-content' }}
                >Flights Number</div></Typography>
                <Typography variant="h4"  sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Calibri',
                  fontWeight: 'bold',
                  letterSpacing: '.05rem',
                  color: 'grey',
                  textDecoration: 'none',
                }}><div style={{ marginTop: 70, marginLeft: 10, marginRight: 'auto', width: 'fit-content' }}
                >Duration</div></Typography>
                <div style={{ marginTop: -150, marginLeft: 110, marginRight: 'auto', width: 'fit-content' , fontSize: '50px', color: 'rgba(30, 30, 150, 0.9)'}}>{data4_2[0].flightnumber}</div>
             <div style={{ marginTop: 80, marginLeft: 70, marginRight: 'auto', width: 'fit-content' , fontSize: '50px', color: 'rgba(30, 30, 150, 0.8)'}}>{data4_2[0].duration}</div>
      </div></>  </Paper>
        :null}

      {value === 3 && data4_2.length > 0 ?

<Paper elevation={0}

style={{ marginTop: 50 }}
>


          <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
            <Typography variant="h4" sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Calibri',
              fontWeight: 'bold',
              letterSpacing: '.05rem',
              color: 'grey',
              textDecoration: 'none',
            }}><div style={{ marginBottom: 30, marginLeft: '5px', marginRight: 'auto', width: 'fit-content' }}
            >Total Number of Passengers who travelled the given Route</div></Typography>
            <div style={{ marginTop: -50, marginLeft: 420, marginRight: 'auto', width: 'fit-content', fontSize: '200px', color: 'rgba(30, 30, 150, 0.7)' }}>{data4_3[0] && data4_3[0].totalcount !== null ? data4_3[0].totalcount : '0'}</div>
          </div></>   </Paper>
        : null}

    {value === 4 && data5_1.length>0 ?                
         <Box
         sx={{
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           padding: '20px',
           minHeight: '70vh',
           // backgroundImage: `url(${img})`,
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           backgroundPositionY: 'center',
         }}
       >
       <Paper elevation={0}

            style={{ marginTop: 0 }}
          >


            <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
              <Typography variant="h4" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Calibri',
                fontWeight: 'bold',
                letterSpacing: '.05rem',
                color: 'grey',
                textDecoration: 'none',
              }}><div style={{ marginBottom: 30, marginLeft: '5px', marginRight: 'auto', width: 'fit-content' }}
              >Revenue Generated by Aircraft Types based on Past Flights</div></Typography>
              <DataGrid

                rows={data5_1.length > 0 ? data5_1 : []}
                columns={columns5_1}
                getRowId={(row) => row.Model}
                style={{ border: 20, marginLeft: '0px', marginRight: 'auto', width: 'fit-content', fontSize: '30px', fontWeight: 'bold', color: 'rgba(30, 30, 150, 0.7)' }}
                onRowClick={(e) => {

                  console.log(e.row);
                  setSelected(e.row);
                }}

                slots={{
                  footer: CustomFooter,
                }}
                pagination={false}

              />
            </div></>
          </Paper>
        </Box>
        : null}
      {value === 4 && data5_2.length > 0 ?
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            minHeight: '10vh',
            // backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'center',
          }}
        >

          <Paper elevation={0}

            style={{ marginTop: -100 }}
          >


            <><div style={{ alignSelf: 'center', marginLeft: 30, justifyContent: 'center' }}>
              <Typography variant="h4" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Calibri',
                fontWeight: 'bold',
                letterSpacing: '.05rem',
                color: 'grey',
                textDecoration: 'none',
              }}><div style={{ marginBottom: 30, marginLeft: '5px', marginRight: 'auto', width: 'fit-content' }}
              >Total Fleet Size</div>
                <div style={{ marginBottom: 30, marginLeft: '250px', marginRight: 'auto', width: 'fit-content' }}
                >Total Flights</div>
                <div style={{ marginBottom: 30, marginLeft: '400px', marginRight: 'auto', width: 'fit-content' }}
                >Total Revenue(US$/Million)</div></Typography>
              <div style={{ marginTop: -50, marginLeft: 10, marginRight: 'auto', width: 'fit-content', fontSize: '200px', color: 'rgba(100, 100, 100, 0.3)' }}>{data5_2[0].TotalFleetSize}</div>
              <div style={{ marginTop: -265, marginLeft: 500, marginRight: 'auto', width: 'fit-content', fontSize: '200px', color: 'rgba(100, 100, 100, 0.5)' }}>{data5_2[0].TotalFlights}</div>
              <div style={{ marginTop: -265, marginLeft: 1200, marginRight: 'auto', width: 'fit-content', fontSize: '200px', color: 'rgba(100, 100, 100, 0.8)' }}>{data5_2[0].TotalRevenue}</div>

            </div></>
          </Paper>
        </Box>
        : null}

    </div>
  );
}