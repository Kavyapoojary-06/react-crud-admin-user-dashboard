import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './login';
import Signup from './Signup';
import AboutUs from './aboutus'; 
import ContactUs from './contactus';
import AdminLogin from './AdminLogin'; 
import Student from './Studetn';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';
import StudentDetails from './StudentDetails';
import UserDashboard from './UserDashboard';
import AdminStudentDetails from './AdminStudentDetails';
function App() {
    return (
        <div className="border">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Signup' element={<Signup />} />
                    <Route path='/AdminLogin' element={<AdminLogin />} />
                    <Route path='/login' element={<Login />} />
                  
                    <Route path='/Studetn' element={<Student />} />
                    <Route path='/create' element={<CreateStudent />} />
                    <Route path='/Studetn/update/:id' element={<UpdateStudent />} />
                    <Route path='/UserDashboard' element={<UserDashboard />} />
                    <Route path='/details/:id' element={<StudentDetails />} />
                    <Route path="/AdminStudentDetails/details/:id" element={<AdminStudentDetails />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    

                </Routes>
            </BrowserRouter>
        </div>
    );
}

function Home() {
  return (
      <div className='d-flex flex-column justify-content-center align-items-center bg-primary vh-100'>
          <h1 className="text-white mb-5 mt-0">Welcome to SMVITM</h1>
          <div className='bg-white p-3 rounded w-35 mb-4'>
              <Link to="/login" className='btn btn-success   w-100  mb-4'>Student Login</Link>
              <Link to="/adminlogin" className='btn btn-success w-100'>Admin Login</Link>
          </div>
          <div className='mt-5'>
              <Link to="/aboutus" className='text-white'>About Us</Link>
              <span className='text-white mx-2'>|</span>
              <Link to="/contactus" className='text-white'>Contact Us</Link>
          </div>
      </div>
  );
}

export default App;
