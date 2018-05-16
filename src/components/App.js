import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container  } from 'semantic-ui-react'
import AppNavigation from "../Navigation/Routes";

class App extends Component {

  componentDidUpdate(){
    console.log(this.props.history.location.pathname);
  }

  render() {
    return (

      <div>

        <div className="ui menu">
          <Container>

          <div className="header item">
            React JS BoilerPlate
          </div>
            <Link className={this.props.history.location.pathname == '/' ? "item active" : "item"} to="/">Home</Link>
            <Link className={this.props.history.location.pathname == '/example' ? "item active" : "item"} to="/example">API Example</Link>
          </Container>
        </div>

        <Container >

        <AppNavigation/>


        </Container>

      </div>




    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  history : PropTypes.object,
};

export default App;
