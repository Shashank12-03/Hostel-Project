
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Leaves from './pages/Student/Leaves';
import Notices from './pages/Student//Notices';
import NoticeDetail from './pages/Student/NoticeDetail';
import Complaints from './pages/Student/Complaints';
import LogIn from './pages/Student/LogIn';
import './App.css';
import HostelRegistrationPage from './pages/Hostel/HostelRegistrationPage';
import HostelLoginPage from './pages/Hostel/HostelLoginPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/leaves" element={<Leaves />} />
        <Route path='/notices' element={<Notices />} />
        <Route path='/detailnotice' element={<NoticeDetail />} />
        <Route path='/complaints' element={<Complaints />} />
        <Route path='/Student/logIn' element={<LogIn />} />
        <Route path='/Hostel/Login' element={<HostelLoginPage />} />
        <Route path='/registerHostel' element={<HostelRegistrationPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
