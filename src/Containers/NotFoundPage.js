import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
  return (
    <Container className="paddedContainer">
      <h1>404 Page Not Found</h1>
      <Link to="/"> Go back to homepage </Link>
    </Container>
  );
};

export default NotFoundPage;