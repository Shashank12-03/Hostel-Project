import React, { useState } from 'react';
import {Box, Grid, Paper, Typography, InputLabel, TextField, Button, InputAdornment,IconButton } from "@mui/material";
import {Visibility, VisibilityOff} from '@mui/icons-material';

const LogIn = () => {
    const [name,setName]=useState('');
    const [showPassword, setShowPassword]=useState(false);
    const handleSubmit=()=>{
        console.log("Name:", name);
        setName('');
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
                        Log in
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
                                Name
                            </InputLabel>
                        </Grid>
                        <Grid sx={{mb:'18px'}}>
                            <TextField
                                fullWidth
                                required
                                name="name"
                                label="name"
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
                        <Button
                            color="success"
                            sx={{ display: "block", margin: "0 auto" }}
                            onClick={handleSubmit}
                        >
                            Log in
                        </Button>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default LogIn;
