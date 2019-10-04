import React from 'react';
import { Link } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Footer = () => {
  return (
    <div>
    <div className="footer ui inverted">
      <Row>

          <Col className="about">
            <h4>About</h4>
            <p>React Big Bang - Ready to go React.js starter kit. </p>
            <p>Made with love by <a href="https://qwebdev.eu/" target="_blank"  rel="noopener noreferrer">Qdev Techs</a> © 2018.</p>
          </Col>

          <Col>
            <h4>Services</h4>
            <ul>
              <li><Link to="home">Home</Link></li>
              <li><Link  to="documentation">Documentation</Link></li>
              <li><Link  to="example">API Example</Link></li>
            </ul>

          </Col>

          <Col>
            <h4>Follow us on social media</h4>
            <a href="https://www.facebook.com/qwebdev/" target="_blank"  rel="noopener noreferrer"></a>
            <a href="https://twitter.com/Qwebdev" target="_blank"  rel="noopener noreferrer"></a>
            <a href="https://www.instagram.com/q.dev/" target="_blank"  rel="noopener noreferrer"></a>
            <a href="https://www.linkedin.com/company/qdev" target="_blank"  rel="noopener noreferrer"></a>
          </Col>

      </Row>

    </div>
    </div>
  );
};

export default Footer;
