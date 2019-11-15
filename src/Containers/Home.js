import React, { Component } from 'react'

import '../Styles/home.scss';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {Image} from "react-bootstrap";
import Images from "../Styles/Images"

class Home extends Component {

  componentDidMount(){
  }

  componentDidUpdate(){
  }

  render(){
    return(
      <div>

        <div className="homeHeader">
          <div className="homeHero">
            <h1 className="bigH">React big bang</h1>
            <p  className="bigP">The 💥  you need for your React projects.</p>
            <Link to="documentation">
              <Button variant="info" size="lg" >Get started</Button>
            </Link>
          </div>
        </div>

        <Container>
          <Row className="homeContainer pt-4">
            <Col lg={{span:6}} style={{paddingTop:'2rem'}}>
              <h1>About the boilerplate</h1>
              <p>React Big Bang is a solid foundation for React.js based apps, backed by latest techs and tools to get your React projects on feet in no time. The boilerplate includes basic API call example and UI elements usage example.</p>
              <p>Check out our website at <a href="https://qwebdev.eu/" target="_blank" rel="noopener noreferrer">Qdev</a> and our code marketplace at <a href="https://alkanyx.com/" target="_blank" rel="noopener noreferrer">Alkanyx</a> for more cool stuff.</p>
              <p>You can also checkout the <a href="https://github.com/theqdev/react-big-bang" target="_blank" rel="noopener noreferrer">Github</a> page.</p>
            </Col>
            <Col lg={{span:6}} className="center">
              <Image src={Images.logo} width={320}/>
            </Col>
          </Row>
        </Container>

        <div className="d-flex mb-2 mt-4">
          <Container className="pb-3 pt-3" style={{borderTop: '1px solid rgba(0, 0, 0, 0.1)',borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}>
            <Row>
              <Col className="col-lg-6 center">
                <h1>Ready to go</h1>
                <p>Just clone the repo and you are ready to start coding.</p>
              </Col>
              <Col className="col-lg-6 center">
                <h1>Save time</h1>
                <p>Skip the time and frustration of configuring a new React app.</p>
              </Col>
            </Row>
          </Container>
        </div>

        <Container className="text" style={{marginTop:'40px',marginBottom:'40px'}}>

          <div className="info">
            <h1>Webpack - Babel - Router</h1>
            <p>Out of the box ES6 configuration for both development and production builds.</p>
          </div>

          <div className="row">
            <div className="col">
              <hr />
            </div>
            <div className="col-auto">AND</div>
            <div className="col">
              <hr />
            </div>
          </div>

          <div className="info">
            <h1>Redux - Redux Sauce - Redux Sagas</h1>
            <p>Quick and on point Redux workflow implementation that allows you to easily create reducers, actions, action creators and middleware to handle the data you need.</p>
          </div>

          <div className="row">
            <div className="col">
              <hr />
            </div>
            <div className="col-auto">AND</div>
            <div className="col">
              <hr />
            </div>
          </div>

          <div className="info">
            <h1 className="header">API Client Ready</h1>
            <p>Map your backend API endpoints and you are ready to start fetching data from your API.</p>
          </div>

          <div className="row">
            <div className="col">
              <hr />
            </div>
            <div className="col-auto">AND</div>
            <div className="col">
              <hr />
            </div>
          </div>

          <div className="info">
            <h1 className="header">ESLint - Jest - Browsersync</h1>
            <p>Do not let your code get out of control by using linting and tests. </p>
          </div>

          <div className="row">
            <div className="col">
              <hr />
            </div>
            <div className="col-auto">AND</div>
            <div className="col">
              <hr />
            </div>
          </div>

          <div className="info">
            <h1 className="header">React Bootstrap - SCSS - PostCSS</h1>
            <p>Start building your UI quickly with React Boostrap UI kit and modern CSS.</p>
          </div>

        </Container>

      </div>
    )
  }

}

export default Home
