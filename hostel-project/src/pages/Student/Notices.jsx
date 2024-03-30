import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Notices = () => {
  const notices = {
    1: "Always read instructions thoroughly before proceeding with any task to ensure accuracy and safety.",
    2: "When using electrical appliances, make sure to unplug them when not in use to prevent accidents and save energy.",
    3: "Practice good hand hygiene by washing your hands with soap and water for at least 20 seconds, especially before handling food or after coughing/sneezing."
  };

  return (
    <Box>
      <Typography variant='h2' sx={{ml:'9%', mt:'1%'}} fontFamily='Serif'>Notices</Typography>
      <Paper elevation={3} sx={{ mt: '5%', ml: '20%', mr: '20%', p: '2%', height: '75%' }}>
        <List sx={{}}>
          {Object.entries(notices).map(([id, notice]) => (
            <Link to={`/detailnotice/${id}`} key={id} style={{ textDecoration: "none" }}>
              <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <ListItemText
                  sx={{ display: 'grid', flexWrap: 'column-wrap', borderBottom: 'solid', pt: '10px', pb: '20px' }}
                  component="span"
                  color="text.primary"
                  primary={notice}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Paper>
    </Box>
  )
}

export default Notices;
