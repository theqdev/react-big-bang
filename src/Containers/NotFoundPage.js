import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <main className="d-flex min-vh-100 align-items-center bg-white ">
    <Container className="text-center">
      <p className="text-base fw-bold text-primary fs-4 mb-0">404</p>
      <h1 className="mb-3 display-4 fw-bold text-dark">Page not found</h1>
      <p className="mb-4 text-muted">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className=" d-flex justify-content-center gap-3">
        <Link to="/">
          <Button className="px-4 py-2 text-sm fw-semibold text-white" variant="primary">
            Go back home
          </Button>
        </Link>
      </div>
    </Container>
  </main>
);

export default NotFoundPage;
