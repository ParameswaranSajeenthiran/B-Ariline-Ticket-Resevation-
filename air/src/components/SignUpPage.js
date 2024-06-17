import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from '../image/airline.jpg';
import { InputLabel, MenuItem, Paper, Select } from "@mui/material";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import dayjs from 'dayjs';

const defaultTheme = createTheme();



export default function SignUp() {
    const [registrationDetails,setRegistrationDetails] = useState({});

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
       
    };
    //onclick 
    function handleChange(event){
        setRegistrationDetails({...registrationDetails,[event.target.name]:event.target.value});
        console.log("passenegers",registrationDetails);

    }
    //handle date inputs separately
    function handleDateChange(date) {
        // Update the dateofBirth property in the registrationDetails state
        const isoDate = date.format();
        setRegistrationDetails({ ...registrationDetails, dateofBirth: isoDate });
        console.log("Selected Date:", date.toISOString());
    }
    function saveSignUpDetails(){
        console.log("signin in process");
        try{
            console.log("registrationDetails", registrationDetails);
            axios.post("/signUp/insertSignUp",{
                registrationDetails: registrationDetails,
            }).then((response) => {
                console.log("response", response);
            
            })
        }catch{
            
        }
        
    };
    function App({ children }) {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {children}
          </LocalizationProvider>
        );
      }

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          minHeight : '100vh',
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: 'center',
              
                }}
                
                >

                < Paper elevation={3} style={{
                    paddingTop: 1,
                    paddingBottom: 100,
                    minWidth: 500,
                    borderRadius: 0,
                }}>

                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate  sx={{ mt: 3 }}>
                            <Grid item  xs={12} sm={4}>
                                        <TextField
                                        onChange={handleChange}
                                            required
                                            fullWidth
                                            id="userName"
                                            name = "userName"
                                            label="User Name"
                                            autoFocus
                                        />
                                    </Grid>
                                <Grid container spacing={2}>
                                    <Grid item style ={{marginTop:10}} xs={12} sm={6}>
                                        <TextField
                                        onChange = {handleChange}
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid style ={{marginTop:10}} item xs={12} sm={6}>
                                        <TextField
                                        onChange={handleChange}
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="family-name"
                                        />
                                    </Grid>
                                 

                                   
                                    <Grid item xs={12}>
                                        <TextField
                                        onChange={handleChange}
                                            required
                                            fullWidth
                                            id="passportNumber"
                                            name="passportNumber"
                                            label="Passport Number"
                                        />
                                    </Grid>



                                    <Grid item xs={12} >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker onChange= {(date) => handleDateChange(date)}
                                                
                                                label="Date of Birth" 
                                                name = "dateofBirth"  
                                                defaultValue={dayjs('2022-04-17')}  />

                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Grid>


                                    <Grid item xs={12}>
                                        <TextField
                                        onChange={handleChange}
                                            required
                                            fullWidth
                                            id="number1"
                                            label="Telephone Number 1"
                                            name="number1"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                        onChange={handleChange}
                                            required
                                            fullWidth
                                            id="number2"
                                            label="Telephone Number 2"
                                            name="number2"
                                        />
                                    </Grid>


                                    <Grid item xs={12}>
                                        <TextField
                                        onChange={handleChange}
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                        onChange={handleChange}
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={4}>

                                    <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
                                        <Select
                                            name = "country"
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Nationality"
                                            onChange={handleChange}
                                            

                                            >
                                            <MenuItem value={"Sri Lankan"}>Sri Lankan</MenuItem>
                                            <MenuItem value={"Indian"}>Indian</MenuItem>
                                            <MenuItem value={"British"}>Canadian</MenuItem>
                                        </Select>
                                    
                                    </Grid>
                                <Button
                                    
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={()=>{
                                        navigate('/loginPage',
                                            
                                        )
                                        saveSignUpDetails();
                                    }}
                                >
                                    Sign Up
                                </Button>
                                
                            </Box>
                        </Box>
                    </Container>

                </Paper>

            </Box>
        </div >
    );

}





//onChange={(e) => { console.log(e)   }}