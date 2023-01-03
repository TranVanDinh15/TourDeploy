import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css'; // optional
import Login from './Page/Login';
import Signup from './Page/signup';
import Loading from './Boostrap/BootstrapLoading';
import DefaultLayout from './Component/DefaultLayout';
import AuthProvider from './AuthProvider/AuthProvider';
import Addtours from './Component/AddTours/Addtour';
import AllTours from './Component/AllTour/AllTour';
import LoginSystem from './Page/system/loginSystem/loginSystem';
import UserSystem from './Page/system/userSystem/userSystem';
import AbroadTour from './Page/system/abroadTour/abroadTour';
import TourSystem from './Page/system/tourSystem/tourSystem';
// import jwt_decode from 'jwt-decode';

// var token =
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOlt7ImlkIjoxLCJmaXJzdE5hbWUiOiJUcuG6p24iLCJsYXN0TmFtZSI6IlbEg24gxJDhu4tuaCIsImVtYWlsIjoidmFuZGluaDQxMDgwN0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRjelJyVmhVSkFDVjJaZHZUS0drSXNlVTFFa1pCWEVaN0VoN2JHdFE5aTZQejguQ2Q4cXk4UyIsImdlbmRlciI6Im5hbSIsImRhdGUiOiIyMDAxLTE1LTAzIiwiYWRkcmVzcyI6IlF14bqjbmcgTmfDo2kiLCJyb2xlIjoiQURNSU4iLCJjcmVhdGVkQXQiOiIyMDIyLTEyLTIwVDAyOjM4OjAwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEyLTIwVDAyOjM4OjAwLjAwMFoifV0sImlhdCI6MTY3MTUwNTMyMX0.7bAA4r3dyRqcg8GK5v-bPTOkPrgX8T9b9_26SIsCyh8';
// var decoded = jwt_decode(token);

// console.log(decoded);
function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<DefaultLayout />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/loading" element={<Loading />} />
                    <Route path="/addTour" element={<Addtours />} />
                    <Route path="/AllTour" element={<AllTours />} />
                    <Route path="/System/loginSystem" element={<LoginSystem />} />
                    <Route path="/System/userSystem" element={<UserSystem />} />
                    <Route path="/System/AbroadTourSystem" element={<AbroadTour />} />
                    <Route path="/System/tourSystem" element={<TourSystem />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
