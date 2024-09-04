import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import '../Styles/home.scss';
import Images from '../Styles/Images';
import CategoryAndDivider from "../Components/CategoryDivider";

const Home = () => {
  return (
    <div>
      <div className="d-flex justify-content-center py-5 home-header">
        <div className="d-flex justify-content-center py-5 text-center">
          <div>
            <h1 className="fw-bold">Ready to go react-js boilerplate </h1>
            <h3 className="fw-bold mb-5">The 💥 you need for your react projects</h3>
            <Link to="documentation">
              <Button variant="primary" size="lg" style={{color:'#FFF'}}>Get started</Button>
            </Link>
          </div>

        </div>
      </div>

      <Container>
        <Row className="homeContainer pt-4">
          <Col lg={{ span: 8 }} style={{ paddingTop: '2rem' }}>
            <h2 className="fw-bold mb-4">About the boilerplate</h2>
            <p>
              <span className="fw-bold">React Big Bang</span> is a solid foundation for React.js based apps, backed by latest techs and tools to get your React projects on feet in no time. The boilerplate includes basic API call example and UI elements usage example.
            </p>
            <p>
              Check out our website at <a href="https://qwebdev.eu/" target="_blank" rel="noopener noreferrer">Qdev</a> and our code marketplace at <a href="https://alkanyx.com/" target="_blank" rel="noopener noreferrer">Alkanyx</a> for more cool stuff.
            </p>
            <p>
              You can also checkout the <a href="https://github.com/theqdev/react-big-bang" target="_blank" rel="noopener noreferrer">Github</a> page.
            </p>
          </Col>
          <Col lg={{ span: 3 }} className="center">
            <Image src={Images.logo} width={250} />
          </Col>
        </Row>
      </Container>

      <div className="d-flex mb-2 mt-4">
        <Container className="pb-3 pt-4" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
          <Row>
            <Col className="col-lg-6 center">
              <h2 className="fw-bold">Ready to go</h2>
              <p>Just clone the repo and you are ready to start coding.</p>
            </Col>
            <Col className="col-lg-6 center">
              <h2 className="fw-bold">Save time</h2>
              <p>Skip the time and frustration of configuring a new React app.</p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="text" style={{ marginTop: '40px', marginBottom: '40px' }}>

        <div className="d-flex justify-content-center text-center py-4">
          <div>
            <h3 className="fw-bold mb-3">🔮 Webpack - Babel - Router</h3>
            <p>Out of the box ES6 configuration for both development and production builds.</p>
          </div>
        </div>

        <CategoryAndDivider />

        <div className="d-flex justify-content-center text-center py-4">
          <div>
            <h3 className="fw-bold mb-3">📅 Redux - Redux Sauce - Redux Sagas</h3>
            <p>Quick and on point Redux workflow implementation that allows you to easily create reducers, actions, action creators and middleware to handle the data you need.</p>
          </div>
        </div>

        <CategoryAndDivider />

        <div className="d-flex justify-content-center text-center py-4">
          <div>
            <h3 className="fw-bold mb-3">📃 API Client Ready</h3>
            <p>Map your backend API endpoints and you are ready to start fetching data from your API.</p>
          </div>
        </div>

        <CategoryAndDivider />

        <div className="d-flex justify-content-center text-center py-4">
          <div>
            <h3 className="fw-bold mb-3">✔ ESLint - Jest - Browsersync</h3>
            <p>Do not let your code get out of control by using linting and tests. </p>
          </div>
        </div>

        <CategoryAndDivider />

        <div className="d-flex justify-content-center text-center py-4">
          <div>
            <h3 className="fw-bold mb-3">🍂 React Bootstrap - SCSS - PostCSS</h3>
            <p>Start building your UI quickly with React Boostrap UI kit and modern CSS.</p>
          </div>
        </div>

      </Container>

    </div>
  );
}

export default Home;
