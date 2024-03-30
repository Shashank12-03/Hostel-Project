import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Box>
        <Button variant="contained" color="primary">
          <Link to="/registerHostel">
              Get start with your hostel
          </Link>
        </Button>
    </Box>
  )
}

export default Home;
