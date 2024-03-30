import React, { useState } from 'react';
import {Box, FormControl, Grid, MenuItem, Paper, Select, Typography,InputLabel, TextField, Button} from '@mui/material';
import {LocalizationProvider, DateField} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const Leaves = () => {
  const numbers = Array.from({ length: 33 }, (_, index) => index + 1);
  const [name,setName]=useState('');
  const [roomNumber,setRoomNumber]=useState(1);
  const [dol,setDol]=useState(dayjs());
  const [doa,setDoa]=useState(dayjs());
  const [place,setPlace]=useState('');
  const handleSubmit=()=>{
    console.log("Room Number:", roomNumber);
    console.log("Name:", name);
    console.log("Date of Leaving:", dol.format('MM-DD-YYYY'));
    console.log("Date of Joining:", doa.format('MM-DD-YYYY'));
    console.log("Place:", place);
    setRoomNumber(1);
    setName('');
    setDol(dayjs());
    setDoa(dayjs());
    setPlace('');
  }
  console.log(dol);
  return (
    <React.Fragment>
      <Paper elevation={3} sx={{xs:{ mt: "3%", ml: "15%", mr: "15%" },mt:"5%", ml:"27%",mr:"27%"}}>
        <Box sx={{ p: '5px' }}>
          <Typography variant="h5" gutterBottom  sx={{ pb: '5px', textAlign: 'center', mt: '3%' }} >
            Take leave
          </Typography>
          <Grid>
            <Grid sx={{mb:'18px'}}>
              <InputLabel
                sx={{display:'flex', justifyContent:'start',fontWeight:700}}
              >
                Room no.
              </InputLabel>
            </Grid>
            <Grid sx={{mb:'18px'}}>
              <FormControl fullWidth size='small'> 
              <InputLabel id="select-room">Room no.</InputLabel>
                <Select required
                  labelId='select-room'
                  id="room-number"
                  label="room no."
                  onChange={(e)=>{
                    setRoomNumber(e.target.value)
                  }}
                >
                  {numbers.map((num)=>(
                    <MenuItem value={num}>{num}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid>
            <Grid sx={{mb:'18px'}}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  fontWeight: 700
                }}
              >
                Name
              </InputLabel>
            </Grid>
            <Grid sx={{mb:'18px'}}>
              <TextField
                fullWidth
                required
                name='name'
                label='name'
                size='small'
                autoComplete='off'
                variant='outlined'
                onChange={(e)=>{
                  setName(e.target.value.toLowerCase())
                }}
              ></TextField>
            </Grid>
          </Grid>
          <Grid>
            <Grid sx={{mb:'18px'}}>
              <InputLabel sx={{display:'flex', justifyContent:'start',fontWeight:700, pt:'10px', pb:'15px'}}>
                Date of leaving
              </InputLabel>
            </Grid>
            <Grid sx={{mb:'18px'}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField
                  label="Date of leaving"
                  format="MM-DD-YYYY"
                  onChange={(newValue) => setDol(newValue)}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid>
            <Grid sx={{mb:'18px'}}>
              <InputLabel sx={{display:'flex', justifyContent:'start',fontWeight:700, pt:'10px', pb:'15px'}}>
                Date of joining
              </InputLabel>
            </Grid>
            <Grid sx={{mb:'18px'}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField
                  label="Date of joining"
                  format="MM-DD-YYYY"
                  onChange={(newValue) => setDoa(newValue)}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid>
            <Grid sx={{mb:'18px'}}>
              <InputLabel sx={{display:'flex', justifyContent:'start',fontWeight:700}}>
                Place
              </InputLabel>
            </Grid>
            <Grid sx={{mb:'18px'}}>
              <TextField 
                required
                name='place'
                label='place'
                fullWidth
                size='small'
                autoComplete='off'
                variant='outlined'
                sx={{mt:'5px',mb:'10px'}}
                onChange={(e)=>{
                  setPlace(e.target.value.toLowerCase())
                }}
              ></TextField>
            </Grid>
          </Grid>
          <Grid>
            <Button color="secondary" sx={{ display: 'block', margin: '0 auto' }} onClick={handleSubmit}>
              Take leave
            </Button>
          </Grid> 
        </Box>
      </Paper>
    </React.Fragment>
  )
}

export default Leaves;