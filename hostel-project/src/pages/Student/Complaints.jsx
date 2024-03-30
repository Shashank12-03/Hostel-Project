import React, { useState } from 'react';
import {Box, FormControl, Grid, MenuItem, Paper, Select, Typography ,InputLabel, TextField, Button} from '@mui/material';
const Complaints = () => {
  const numbers = Array.from({ length: 33 }, (_, index) => index + 1);
  const complaints=["Electric","Food", "Plumbing", "Hygiene"];
  const[name,setName]=useState('');
  const [roomNumber,setRoomNumber]=useState(1);
  const [complaint,setComplaint]=useState('');
  const [description,setDescription]=useState('');
  const handleSubmit=()=>{
    console.log("Room Number:", roomNumber);
    console.log("Name:", name);
    console.log("Complaint",complaint);
    console.log("Description", description);
    setRoomNumber(1);
    setComplaint('');
    setDescription('');
    setName('');
  }
  return (
    <React.Fragment>
      <Paper elevation={3} sx={{xs:{ mt: "3%", ml: "15%", mr: "15%" },mt:"5%", ml:"27%",mr:"27%"}}>
        <Box sx={{ p: '5px' }}>
          <Typography variant="h5" gutterBottom  sx={{ pb: '5px', textAlign: 'center', mt: '3%' }} >
            Complaint
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
              <InputLabel
                sx={{display:'flex', justifyContent:'start',fontWeight:700}}
              >
                Complaint
              </InputLabel>
            </Grid>
            <Grid sx={{mb:'18px'}}>
              <FormControl fullWidth size='small'> 
              <InputLabel id="select-complaint">Complaint</InputLabel>
                <Select required
                  labelId='select-complaint'
                  id="complaint"
                  label="complaint"
                  value={complaint}
                  onChange={(e)=>{
                    setComplaint(e.target.value)
                  }}
                >
                  {complaints.map((complaint, index)=>(
                    <MenuItem key={index} value={complaint}>{complaint}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid>
            <Grid sx={{mb:'18px'}}>
              <InputLabel sx={{display:'flex', justifyContent:'start',fontWeight:700}}>
                Description
              </InputLabel>
            </Grid>
            <Grid sx={{mb:'18px'}}>
              <TextField 
                required
                name='place'
                label='description'
                fullWidth
                size='small'
                autoComplete='off'
                variant='outlined'
                sx={{mt:'5px',mb:'10px'}}
                onChange={(e)=>{
                  setDescription(e.target.value.toLowerCase())
                }}
              ></TextField>
            </Grid>
          </Grid>
          <Grid>
            <Button color="error" sx={{ display: 'block', margin: '0 auto' }} onClick={handleSubmit}>
              Submit complaint
            </Button>
          </Grid> 
        </Box>
      </Paper>
    </React.Fragment>
  )
}

export default Complaints;