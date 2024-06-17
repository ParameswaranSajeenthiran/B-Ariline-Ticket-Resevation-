import React from "react";
import { AppBar, Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
export default function PassengerDetailCard() {

    const[age, setAge]=useState(10);
    return (
        <div style={{marginTop:40}}>
            <div>
                <TextField id="outlined-basic" label="first name" variant="outlined" />
                <TextField style={{ marginLeft: 20 }} id="outlined-basic" label="last name" variant="outlined" />
                
                <FormControl style={{
                    marginLeft: 20,
                    marginRight:20
                }}>
  <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    // onChange={handleChange}
  >
    <MenuItem value={10}>Sri lankan</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
                  <DatePicker
                style={{ marginLeft: 20 }}

                    onChange={(e) => {
                        console.log(e)
                    }}
                    label="   Date Of Birth" />  
                    </div>
            <div>

                <TextField id="outlined-basic" label="first name" variant="outlined" />
           
<FormControl style={{ marginLeft: 20 }} >
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />

                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    )
}