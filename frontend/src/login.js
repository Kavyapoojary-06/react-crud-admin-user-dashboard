import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './LoginValidation';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [signupRequired, setSignupRequired] = useState(false);
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);
        
        // Check if there are any validation errors
        if (!Object.values(validationErrors).some(error => error !== "")) {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    navigate('/UserDashboard');
                })
                .catch(err => {
                    if (err.response.status === 401) {
                        const { error } = err.response.data;
                        if (error === "Invalid email") {
                            setErrors({ email: "Email does not match" });
                        } else if (error === "Invalid password") {
                            setErrors({ password: "Password does not match" });
                        }
                        
                    } else {
                        console.log(err);
                    }
                });
        }
    };
    
    

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded' style={{ maxWidth: '400px', width: '50%' }}>
                <h2>Student Login</h2>
                {signupRequired && <p className='text-danger'>Signup required. Please <Link to='/Signup'>sign up</Link> first.</p>}
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                            onChange={handleInput} className='form-control' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                            onChange={handleInput} className='form-control' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100' >Log in</button>
                    <br />
                    <br />
                    <Link to="/Signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none' >Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
