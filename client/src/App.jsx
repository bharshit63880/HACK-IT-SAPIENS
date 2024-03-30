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
import DoctorArticles from './Pages/Doctor/DoctorArticles';
import PatientRequests from './Pages/Doctor/PatientRequests';
import CreateArticle from './Pages/Doctor/CreateArticle';
import EditArticle from './Pages/Doctor/EditArticle';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/doctorDashboard/:doctorId' element={<DoctorDashboard />} />
        <Route path='/articles/:doctorId' element={<DoctorArticles />} />
        <Route path='/create-article/:doctorId' element={<CreateArticle />} />
        <Route path='/update-article/:id/:title/:content' element={<EditArticle />} />
        <Route path='/patient-requests/:doctorId' element={<PatientRequests />} />
        <Route path='/userDashboard/:userId' element={<UserDashboard />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;
