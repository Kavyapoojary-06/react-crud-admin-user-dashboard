import React from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';
function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className='d-flex justify-content-center'>Contact Us</h2>
        <strong><p>For any inquiries or assistance, feel free to reach out to us using the contact details below:</p>
        <ul>
          <li><strong>Address:</strong> Bantakal Udupi, Karnataka, India</li>
          <li><strong>Email:</strong> info@sode-edu.in</li>
          <li><strong>Phone:</strong> +91 9878786546</li>
        </ul>
        <p>We're here to help you with any questions you may have regarding admissions, programs, facilities, or any other information about Shri Madhwa Vadiraja Institute of Technology & Management (SMVITM).</p></strong>
        <div className="back-button-container">
          <Link to="/" className="back-button">&#8592; Back</Link>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
