import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validation from "./StudentValidation"; 

function CreateStudent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [usn, setUsn] = useState('');
    const [age, setAge] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const errors = validation({ name, email, usn, age });
        if (Object.keys(errors).length === 0) {
            axios.post('http://localhost:8081/create', { name, email, usn, age })
                .then(res => {
                    console.log(res);
                    navigate('/Studetn');
                }).catch(err => console.log(err));
        } else {
            setErrors(errors);
        }
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='bg-white p-3 rounded' style={{ maxWidth: '400px', width: '50%' }}>
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            className='form-control'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className="text-danger">{errors.name}</p>}
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Usn</label>
                        <input
                            type="text"
                            placeholder='Enter Usn'
                            className='form-control'
                            value={usn}
                            onChange={(e) => setUsn(e.target.value)}
                        />
                        {errors.usn && <p className="text-danger">{errors.usn}</p>}
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="">Age</label>
                        <input
                            type="number"
                            placeholder='Enter Age'
                            className='form-control'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        {errors.age && <p className="text-danger">{errors.age}</p>}
                    </div>

                    <button type="submit" className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default CreateStudent;
