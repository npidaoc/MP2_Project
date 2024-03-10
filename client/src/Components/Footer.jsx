import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <h3>Quick Links</h3>
          <ul className="list">
            <li><a href="index.html">Home</a></li>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div className="footer-content">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href=""><FaFacebook /></a></li>
            <li><a href=""><FaTwitter /></a></li>
            <li><a href=""><FaInstagram /></a></li>
            <li><a href=""><FaLinkedin /></a></li>
          </ul>
        </div>
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p><MdEmail /> Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p><MdPhone /> Phone: +63 9071597625</p>
          <p><MdLocationOn /> Address: Baguio City</p>
        </div>
      </div>
      <div className="bottom-bar">
        <p>&copy; 2023 NP Advertising Solution. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;