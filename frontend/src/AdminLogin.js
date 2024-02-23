import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleInput = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/admin/login', values)
            .then(res => {
                console.log(res.data.message);
                navigate('/Studetn');
            })
            .catch(err => {
                console.error(err.response.data.error);
                setError(err.response.data.error);
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded' style={{ maxWidth: '400px', width: '50%' }}>
                <h2 className="mb-4">Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email' name='email'
                            onChange={handleInput} className='form-control rounded-0' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' name='password'
                            onChange={handleInput} className='form-control rounded-0' />
                    </div>
                    <button type='submit' className='btn btn-success w-100' >Login</button>
                    {error && <span className='text-danger'>{error}</span>}
                    <br />
                    <br />
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none' >Back to Login</Link>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
