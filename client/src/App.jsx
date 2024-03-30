import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import DoctorDashboard from './Pages/Doctor/DoctorDashboard';
import UserDashboard from './Pages/User/UserDashboard';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/doctorDashboard' element={<DoctorDashboard />} />
        <Route path='/userDashboard' element={<UserDashboard />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;
