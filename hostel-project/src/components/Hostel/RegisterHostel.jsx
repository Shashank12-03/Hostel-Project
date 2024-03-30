import React, { useState } from 'react';
import {Box, Grid, Paper, Typography, InputLabel, TextField, Button, InputAdornment,IconButton } from "@mui/material";
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { MuiTelInput } from 'mui-tel-input'

const RegisterHostel = () => {
  const preferredCountries = ['in'];
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');
  const [number,setNumber]=useState('');
  const [showPassword, setShowPassword]=useState(false);
  const handleSubmit=()=>{
      console.log("Name:", name);
      console.log("Address: ", address);
      console.log("Email: ", email);
      console.log("Phone no. : ",number);
      
      setName('');
  }
  const handlePhoneInput=(newValue)=>{
    setNumber(newValue);
  }

  const handleClickShowPassword = ()=>{
      setShowPassword(!showPassword);
  };
  return (
    <React.Fragment>
            <Paper elevation={3} sx={{xs:{ mt: "3%", ml: "15%", mr: "15%" },mt:"5%", ml:"27%",mr:"27%"}}>
              <Box sx={{ p: "5px" }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ pb: "5px", textAlign: "center", mt: "3%" }}
                >
                    Register hostel
                </Typography>
                <Grid>
                    <Grid sx={{mb:'18px'}}>
                        <InputLabel
                            sx={{
                                display: "flex",
                                justifyContent: "start",
                                fontWeight: 700,
                            }}
                        >
                          Hostel Name
                        </InputLabel>
                    </Grid>
                    <Grid sx={{mb:'18px'}}>
                        <TextField
                            fullWidth
                            required
                            name="hostel-name"
                            label="hostel-name"
                            size="small"
                            autoComplete="off"
                            variant="outlined"
                            onChange={(e) => {
                                setName(e.target.value.toLowerCase());
                            }}
                            
                        ></TextField>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid sx={{mb:'18px'}}>
                        <InputLabel
                            sx={{
                                display: "flex",
                                justifyContent: "start",
                                fontWeight: 700,
                            }}
                        >
                          Email
                        </InputLabel>
                    </Grid>
                    <Grid sx={{mb:'18px'}}>
                        <TextField
                            fullWidth
                            required
                            name="hostel-email"
                            label="hostel-email"
                            size="small"
                            autoComplete="off"
                            variant="outlined"
                            onChange={(e) => {
                                setEmail(e.target.value.toLowerCase());
                            }}
                            
                        ></TextField>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid sx={{mb:'18px'}}>
                        <InputLabel
                            sx={{
                                display: "flex",
                                justifyContent: "start",
                                fontWeight: 700,
                            }}
                        >
                          Phone no.
                        </InputLabel>
                    </Grid>
                    <Grid sx={{mb:'18px'}}>
                      <MuiTelInput
                          className="number"
                          label="Phone" fullWidth value={number}
                          onChange={handlePhoneInput}
                          defaultCountry={'in'} 
                          preferredCountries={preferredCountries}
                      />
                    </Grid>
                </Grid>
                <Grid>
                    <Grid sx={{mb:'18px'}}>
                        <InputLabel
                            sx={{
                                display: "flex",
                                justifyContent: "start",
                                fontWeight: 700,
                            }}
                        >
                          Address
                        </InputLabel>
                    </Grid>
                    <Grid sx={{mb:'18px'}}>
                        <TextField
                            fullWidth
                            required
                            name="hostel-address"
                            label="hostel-address"
                            size="small"
                            autoComplete="on"
                            variant="outlined"
                            onChange={(e) => {
                                setAddress(e.target.value.toLowerCase());
                            }}
                            
                        ></TextField>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid sx={{mb:'18px'}}>
                        <InputLabel
                            sx={{
                                display: "flex",
                                justifyContent: "start",
                                fontWeight: 700,
                                mb:'18px'
                            }}
                        >
                            Password
                        </InputLabel>
                    </Grid>
                    <Grid sx={{mb:'18px'}}>
                        <TextField
                            size="small"
                            type={showPassword ? "text" : "password"}
                            label="Password"
                            required={true}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid>
                    <Grid sx={{mb:'18px'}}>
                        <InputLabel
                            sx={{
                                display: "flex",
                                justifyContent: "start",
                                fontWeight: 700,
                                mb:'18px'
                            }}
                        >
                            Confirm Password
                        </InputLabel>
                    </Grid>
                    <Grid sx={{mb:'18px'}}>
                        <TextField
                            size="small"
                            type={showPassword ? "text" : "password"}
                            label="Confirm-Password"
                            required={true}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid>
                    <Button
                        color="success"
                        sx={{ display: "block", margin: "0 auto" }}
                        onClick={handleSubmit}
                    >
                        Register
                    </Button>
                </Grid>
              </Box>
            </Paper>
        </React.Fragment>
  )
}

export default RegisterHostel;