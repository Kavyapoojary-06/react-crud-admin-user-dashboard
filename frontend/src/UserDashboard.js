import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

function AdminDashboard() {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    
    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {
                setStudents(res.data);
                console.log('Student data:', res.data);
            })
            .catch(err => console.error(err));
    }, []);

    

    const handleRead = (id) => {
        navigate(`/details/${id}`);
    };

    const handleLogout = () => {
        
        navigate('/');
    };

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div className='card'>
                        <div className='card-header d-flex justify-content-between align-items-center bg-primary text-light'>
                            <h4>User Dashboard</h4>
                            <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
                        </div>
                        <div className='card-body'>
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Usn</th>
                                        <th>Age</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((student, i) => (
                                        <tr key={i}>
                                            <td>{student.name}</td>
                                            <td>{student.email}</td>
                                            <td>{student.usn}</td>
                                            <td>{student.age}</td>
                                            <td>
                                                <button className='btn btn-info me-2' onClick={() => handleRead(student.id)}>Read</button>
                                                
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
