import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Grid, Icon} from "semantic-ui-react";

const Footer = () => {
  return (
    <div className="footer ui inverted">
      <Container>
        <Grid columns={3} divided>
          <Grid.Column>
            <h4>About</h4>
            <p>React Big Bang - Ready to go React.js starter kit. </p>
            <p>Made with love by <a href="https://qwebdev.eu/" target="_blank"  rel="noopener noreferrer">Qdev Techs</a> © 2018.</p>
          </Grid.Column>
          <Grid.Column>
            <h4>Services</h4>
            <ul>
              <li><Link to="home">Home</Link></li>
              <li><Link  to="documentation">Documentation</Link></li>
              <li><Link  to="example">API Example</Link></li>
            </ul>
          </Grid.Column>
          <Grid.Column className="social">
            <h4>Follow us on social media</h4>
            <a href="https://www.facebook.com/qwebdev/" target="_blank"  rel="noopener noreferrer"><Icon name="facebook" size='big'/></a>
            <a href="https://twitter.com/Qwebdev" target="_blank"  rel="noopener noreferrer"><Icon name="twitter" size='big'/></a>
            <a href="https://www.instagram.com/q.dev/" target="_blank"  rel="noopener noreferrer"><Icon name="instagram" size='big'/></a>
            <a href="https://www.linkedin.com/company/qdev" target="_blank"  rel="noopener noreferrer"><Icon name="linkedin" size='big'/></a>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
