import React, { Component } from 'react'
import {Container, Label} from 'semantic-ui-react'

class Docs extends Component {

  componentDidMount(){
  }

  componentDidUpdate(){

  }

  render(){
    return(
      <Container className="paddedContainer">

        <h1>Documentation</h1>

        <h3>Overview</h3>
        <Label as='a' color='yellow' image>IN<Label.Detail>Development</Label.Detail></Label>

        <h3>Table of contents:</h3>
        <ul>
          <li>Routing</li>
          <li>Components</li>
          <li>Redux - Sagas - API</li>
          <li>UI & CSS</li>
        </ul>

        <h3>Routing</h3>
        <Label as='a' color='yellow' image>IN<Label.Detail>Development</Label.Detail></Label>

        <h3>Components</h3>
        <Label as='a' color='yellow' image>IN<Label.Detail>Development</Label.Detail></Label>

        <h3>Redux - Sagas - API</h3>
        <Label as='a' color='yellow' image>IN<Label.Detail>Development</Label.Detail></Label>

        <h3>UI & CSS</h3>
        <Label as='a' color='yellow' image>IN<Label.Detail>Development</Label.Detail></Label>

      </Container>
    )
  }


}

export default Docs
