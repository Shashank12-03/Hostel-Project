import React from 'react';
import {Box,} from '@mui/material';
import { Route, Routes} from 'react-router-dom';
import Leaves from '../features/Leaves';
import Notices from '../features/Notices';
import NoticeDetail from '../features/NoticeDetail';
import Complaints from '../features/Complaints';
import LogIn from '../features/LogIn';
import HostelLogin from '../features/HostelLogin';
import RegisterHostel from '../features/RegisterHostel';

const Home = () => {
  return (
    <Box>
      <Routes>
        <Route path="/leaves" element={<Leaves/>} />
        <Route path='/notices' element={<Notices/>}/>
        <Route path='/detailnotice' element={<NoticeDetail />}/>
        <Route path='/complaints' element={<Complaints/>}/>
        <Route path='/logIn' element={<LogIn/>}/>
        <Route path='/hostelLogIn' element={<HostelLogin/>}/>
        <Route path='/registerHostel' element={<RegisterHostel/>}/>
      </Routes>
      <RegisterHostel/>
    </Box>
  )
}

export default Home;