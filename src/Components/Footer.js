import React from 'react';
import { Link } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer ui inverted">
      <Container>
        <Row>
          <Col col={{ span: 4 }}>
            <h4 className="mb-3">About</h4>
            <p className="mb-2">React Big Bang - Ready to go React.js starter kit.</p>
            <p className="mb-2">Made with <span style={{ color: 'red' }}>♥</span> by <a href="https://qdev.tech/" target="_blank" rel="noopener noreferrer">Qdev Techs</a> © {new Date().getFullYear()}.</p>
          </Col>
          <Col col={{ span: 4 }}>
            <h4 className="mb-3">Links</h4>
            <ul>
              <li className="mt-1"><Link to="home">Home</Link></li>
              <li className="mt-1"><Link to="documentation">Documentation</Link></li>
              <li className="mt-1"><Link to="example">API Example</Link></li>
            </ul>
          </Col>
          <Col col={{ span: 4 }}>
            <h4 className="mb-3">Follow / Reach us</h4>
            <a href="https://www.facebook.com/qwebdev/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className="footer-social-icon" size="2rem" /></a>
            <a href="https://twitter.com/Qwebdev" target="_blank" rel="noopener noreferrer"><FaInstagram className="footer-social-icon" size="2rem" /></a>
            <a href="https://www.instagram.com/q.dev/" target="_blank" rel="noopener noreferrer"><FaTwitterSquare className="footer-social-icon" size="2rem" /></a>
            <a href="https://www.linkedin.com/company/qdev" target="_blank" rel="noopener noreferrer"><FaLinkedin className="footer-social-icon" size="2rem" /></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
