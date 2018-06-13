import React from 'react';
import { Link } from 'react-router-dom';
import {Container} from "semantic-ui-react";

const NotFoundPage = () => {
  return (
    <Container className="paddedContainer">
      <h1>404 Page Not Found</h1>
      <Link to="/"> Go back to homepage </Link>
    </Container>
  );
};

export default NotFoundPage;
