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
    const activeStyle = { color: 'blue' };
    return (

      <div>

        <div className="ui menu">
          <Container>

          <div className="header item">
            React JS BoilerPlate
          </div>

            <Link className={this.props.history.location.pathname == '/' ? "item active" : "item"} to="/">Home</Link>
            <Link className={this.props.history.location.pathname == '/example' ? "item active" : "item"} to="/example">Example</Link>
            {/*<Link className={this.props.history.location.pathname == '/fuel-savings' ? "item active" : "item"} to="/fuel-savings">Demo App</Link>*/}
            {/*<Link className={this.props.history.location.pathname == '/about' ? "item active" : "item"} to="/about" >About</Link>*/}
            {/*<Link className={this.props.history.location.pathname == '/about' ? "item active" : "item"} to="/about" >Home 2</Link>*/}

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
  children: PropTypes.element
};

export default App;
