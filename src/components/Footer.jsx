import "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 footer-section">
            <h3 className="footer-title">About Us</h3>
            <p className="footer-text">
              We provide seamless and secure verification solutions to help organizations make informed decisions with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-2 footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><Link to="/verification">Verification</Link></li>
              <li><Link to="/security">Security</Link></li>
              <li><Link to="/data-protection">Data Protection</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <p>Email: <a href="sanusiislamiyat125@gmail.com">apolloTrace.com</a></p>
            <p>Phone: dev and i will fix</p>
            <div className="footer-socials">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} apolloTrace. All Rights Reserved.</p>
          <ul className="footer-bottom-links">
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
