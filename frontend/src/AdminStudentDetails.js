import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

function AdminStudentDetails() {
   const { id } = useParams();
   const [student, setStudent] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      axios.get(`http://localhost:8081/student/${id}`)
         .then(res => {
            setStudent(res.data);
         })
         .catch(err => console.error(err));
   }, [id]);

   return (
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
         <div className="w-40 bg-white rounded p-3 shadow-sm" style={{ border: '3px solid black'  }} >
            {student ? (
               <>
                  <h2>Student Details</h2>
                  <div>
                    <h5> <strong>Name:</strong> {student.name}</h5>
                  </div>
                  <div>
                  <h5><strong>Email:</strong>  {student.email}</h5> 
                  </div>
                  <div>
                    <h5> <strong>Usn:</strong>   {student.usn}</h5>
                  </div>
                  <div>
                    <h5> <strong>Age:</strong>  {student.age}</h5>
                  </div>
                  <Link to="/Studetn" className="btn btn-primary mt-3">Back</Link>
               </>
            ) : (
               <p>Loading...</p>
            )}
         </div>
      </div>
   );
}

export default AdminStudentDetails;
