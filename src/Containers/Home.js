import React, { Component } from 'react'
import {Button, Container, Divider, Grid, Image} from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import '../Styles/home.scss';
import {Link} from "react-router-dom";

class Home extends Component {

  componentDidMount(){
  }

  componentDidUpdate(){
  }

  render(){
    return(
      <div>

        {/*Header*/}
        <div className="homeHeader">
          <Grid centered>
            <div className="homeHero">
              <h1 className="bigH">React big bang</h1>
              <p  className="bigP">The 💥  you need for your React projects.</p>
             <Link to="documentation">
              <Button size='huge' color='violet'>Get started  <Icon name='angle right' /></Button>
              </Link>
            </div>
          </Grid>
        </div>

        {/*Middle section*/}
        <Container className="homeContainer">
          <Grid columns={2} >
            <Grid.Row>
              <Grid.Column>
                <h1>About the boilerplate</h1>
                <p>React Big Bang is a solid foundation for React.js based apps, backed by latest techs and tools to get your React projects on feet in no time. The boilerplate includes basic API call example and UI elements usage example.</p>
                <p>Check out our website at <a href="https://qwebdev.eu/" target="_blank" rel="noopener noreferrer">Qdev</a> and our code marketplace at <a href="https://alkanyx.com/" target="_blank" rel="noopener noreferrer">Alkanyx</a> for more cool stuff.</p>
                <p>You can also checkout the <a href="https://github.com/theqdev/react-big-bang" target="_blank" rel="noopener noreferrer">Github</a> page.</p>
              </Grid.Column>
              <Grid.Column >
                <Grid centered columns={2}>
                  <Grid.Column>
                    <Image src="data:image/png;base64,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" />
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        {/* Second section */}
        <div style={{border:'1px solid #DEDEDF',marginTop:'40px'}}>
          <Container>
            <Grid columns={2} divided textAlign='center'>
              <Grid.Row >
                <Grid.Column style={{padding:'20px'}}>
                  <h1>Ready to go</h1>
                  <p>Just clone the repo and you are ready to start coding.</p>
                </Grid.Column>
                <Grid.Column style={{padding:'20px'}}>
                  <h1>Save time</h1>
                  <p>Skip the time and frustration of configuring a new React app.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>

        {/* Third section */}
        <Container className="text" style={{marginTop:'40px',marginBottom:'40px'}}>
          <Grid>

            <Grid.Row>
              <Grid.Column>
                <h1>Webpack - Babel - Router</h1>
                <p>Out of the box ES6 configuration for both development and production builds.</p>
              </Grid.Column>
            </Grid.Row>
            <Divider horizontal>And</Divider>

            <Grid.Row>
              <Grid.Column>
                <h1>Redux - Redux Sauce - Redux Sagas</h1>
                <p>Quick and on point Redux workflow implementation that allows you to easily create reducers, actions, action creators and middleware to handle the data you need.</p>
              </Grid.Column>
            </Grid.Row>
            <Divider horizontal>And</Divider>

            <Grid.Row>
              <Grid.Column>

                <h1 className="header">API Client Ready</h1>
                <p>Map your backend API endpoints and you are ready to start fetching data from your API.</p>
              </Grid.Column>

            </Grid.Row>
            <Divider horizontal>And</Divider>

            <Grid.Row>
              <Grid.Column>
                <h1 className="header">ESLint - Jest - Browsersync</h1>
                <p>Do not let your code get out of control by using linting and tests. </p>
              </Grid.Column>
            </Grid.Row>
            <Divider horizontal>And</Divider>

            <Grid.Row>
              <Grid.Column>
                <h1 className="header">Semantic UI - SASS - PostCSS</h1>
                <p>Start building your UI quickly with Semantic UI kit and modern CSS.</p>
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Container>

      </div>
    )
  }

}

export default Home
