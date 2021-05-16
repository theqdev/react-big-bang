import React from 'react';
import { Link } from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Icon} from 'react-icons-kit'
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare'
import {instagram} from 'react-icons-kit/fa/instagram'
import {twitterSquare} from 'react-icons-kit/fa/twitterSquare'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import {Container} from "react-bootstrap";

const Footer = () => {
  return (
      <div className="footer ui inverted">
        <Container>
          <Row>

            <Col col={{span:4}}>
              <h4>About</h4>
              <p>React Big Bang - Ready to go React.js starter kit. </p>
              <p>Made with <span style={{color:'red'}}>♥</span> by <a href="https://qwebdev.eu/" target="_blank"  rel="noopener noreferrer">Qdev Techs</a> © {new Date().getFullYear()}.</p>
            </Col>

            <Col col={{span:4}}>
              <h4>Links</h4>
              <ul>
                <li><Link to="home">Home</Link></li>
                <li><Link  to="documentation">Documentation</Link></li>
                <li><Link  to="example">API Example</Link></li>
              </ul>
            </Col>

            <Col col={{span:4}}>
              <h4>Follow / Reach us</h4>
              <a href="https://www.facebook.com/qwebdev/" target="_blank"  rel="noopener noreferrer"><Icon icon={facebookSquare} className="footer-social-icon" size="2rem"/></a>
              <a href="https://twitter.com/Qwebdev" target="_blank"  rel="noopener noreferrer"><Icon icon={instagram} className="footer-social-icon" size="2rem"/></a>
              <a href="https://www.instagram.com/q.dev/" target="_blank"  rel="noopener noreferrer"><Icon icon={twitterSquare} className="footer-social-icon" size="2rem"/></a>
              <a href="https://www.linkedin.com/company/qdev" target="_blank"  rel="noopener noreferrer"><Icon icon={linkedinSquare} className="footer-social-icon" size="2rem"/></a>
            </Col>

          </Row>
        </Container>

      </div>
  );
};

export default Footer;
