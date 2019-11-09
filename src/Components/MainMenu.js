import React from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../Styles/styles.scss';
import PropTypes from 'prop-types';

const MainMenu = () => {
  return (

    <div>
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link to="/home" as={NavLink}>Home</Nav.Link>
          <Nav.Link to="/documentation" as={NavLink}>Documentation</Nav.Link>
          <Nav.Link to="/posts" as={NavLink}>API Example</Nav.Link>
        </Nav>
        <Nav.Link href="https://alkanyx.com" target="_blank" className="alkanyx-btn">Alkanyx</Nav.Link>
        <Nav.Link href="https://github.com/theqdev/react-big-bang" target="_blank" className="git-btn">Github</Nav.Link>
      </Navbar>
    </div>
  );
};

MainMenu.propTypes = {
  history : PropTypes.object,
};

export default MainMenu;
