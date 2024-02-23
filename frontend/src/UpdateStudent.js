import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import validation from './StudentValidation'; 

function UpdateStudent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [usn, setUsn] = useState('');
    const [age, setAge] = useState('');
    const [errors, setErrors] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/student/${id}`)
            .then(res => {
                const student = res.data;
                setName(student.name);
                setEmail(student.email);
                setUsn(student.usn);
                setAge(student.age);
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validation({ name, email, usn, age });
        if (Object.keys(errors).length === 0) {
            axios.put(`http://localhost:8081/update/${id}`, { name, email, usn, age })
                .then(res => {
                    console.log(res);
                    navigate('/Studetn');
                })
                .catch(err => console.log(err));
        } else {
            setErrors(errors);
        }
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Student</h2>
                    <div className='mb-2'>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text" id="name"
                            placeholder='Enter Name'
                            className='form-control'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className="text-danger">{errors.name}</p>}
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder='Enter Email'
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="usn">USN</label>
                        <input
                            type="text" id="usn"
                            placeholder='Enter USN'
                            className='form-control'
                            value={usn}
                            onChange={(e) => setUsn(e.target.value)}
                        />
                        {errors.usn && <p className="text-danger">{errors.usn}</p>}
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="age">Age</label>
                        <input
                            type="number" id="age"
                            placeholder='Enter Age'
                            className='form-control'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        {errors.age && <p className="text-danger">{errors.age}</p>}
                    </div>

                    <button type="submit" className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateStudent;
