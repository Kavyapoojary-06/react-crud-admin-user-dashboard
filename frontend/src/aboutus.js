import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-content">
      <h2 className='d-flex justify-content-center'>About SMVITM</h2>
        <strong><p> Established in 2010, Shri Madhwa Vadiraja Institute of Technology & Management (SMVITM) is a leading institution committed to providing quality education and fostering innovation and excellence in students. Our campus is located in Bantakal Udupi, Karnataka, India.</p>
        <p>At SMVITM, we offer a wide range of undergraduate and postgraduate programs in engineering, management, and computer applications. Our courses include Computer Science and Engineering (CSE), Electronics and Communication Engineering (ECE), Civil Engineering, Data Science, Artificial Intelligence (AI), and Machine Learning (ML).</p>
        <p>With state-of-the-art infrastructure, experienced faculty, and industry partnerships, we aim to empower our students to succeed in their careers. Our institution focuses on holistic development, offering a blend of academics, research, and extracurricular activities. We provide a conducive learning environment that encourages creativity, critical thinking, and leadership skills.</p>
        <p>Explore our website (sode-edu.in) to learn more about our academic programs, faculty, facilities, and vibrant campus life. Additionally, we provide bus facilities for the convenience of our students.</p></strong>
        
        <div className="back-button-container">
          <Link to="/" className="back-button">&#8592; Back</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
