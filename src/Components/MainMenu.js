import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaGithub } from 'react-icons/fa';

const MainMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="justify-content-start">
          <Nav>
            <Nav.Link to="/" exact as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/documentation" as={NavLink}>Documentation</Nav.Link>
            <Nav.Link to="/posts" as={NavLink}>API Example</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Item>
              <a href="https://github.com/theqdev/react-big-bang" rel="noopener noreferrer" target="_blank">
                <Button variant="outline-light">
                  <FaGithub size="1.3em" style={{ marginTop: '-3px' }} /> Github
                </Button>
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

MainMenu.propTypes = {
  history: PropTypes.object,
};

export default MainMenu;
