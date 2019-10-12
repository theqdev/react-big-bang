import React, { Component } from 'react'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


class Docs extends Component {

  componentDidMount(){
  }

  componentDidUpdate(){

  }

  render(){
    return(
      <div>

        <Container className="paddedContainer" size="sm">

          <h1>Documentation</h1>

          <h3>Overview</h3>

          <Button variant="warning" size="sm">IN Development</Button>


          <h3>Table of contents:</h3>
          <ul>
            <li>Routing</li>
            <li>Components</li>
            <li>Redux - Sagas - API</li>
            <li>UI & CSS</li>

          </ul>

          <h3>Routing</h3>

          <Button variant="warning" size="sm">IN Development</Button>

          <h3>Components</h3>

          <Button variant="warning" size="sm">IN Development</Button>

          <h3>Redux - Sagas - API</h3>

          <Button variant="warning" size="sm">IN Development</Button>

          <h3>UI & CSS</h3>

          <Button variant="warning" size="sm">IN Development</Button>

        </Container>

    </div>

    )
  }


}

export default Docs