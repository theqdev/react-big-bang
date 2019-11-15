import React from 'react';
import { Link } from 'react-router-dom';
import {Container} from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <Container className="pt-4 pb-4">
      <h1>404 Page Not Found</h1>
      <Link to="/"> Go back to homepage </Link>
    </Container>
  );
};

export default NotFoundPage;
