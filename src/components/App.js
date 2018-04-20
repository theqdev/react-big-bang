/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import Home from '../containers/Home';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header,  Container  } from 'semantic-ui-react'
// import { Link } from 'react-router'
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {

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
            PUBG Tracker
          </div>

            <Link className={this.props.history.location.pathname == '/' ? "item active" : "item"} to="/">Home</Link>
            <Link className={this.props.history.location.pathname == '/fuel-savings' ? "item active" : "item"} to="/fuel-savings">Demo App</Link>
            <Link className={this.props.history.location.pathname == '/about' ? "item active" : "item"} to="/about" >About</Link>
            <Link className={this.props.history.location.pathname == '/about' ? "item active" : "item"} to="/about" >Home 2</Link>

          </Container>
        </div>

        <Container >

            {/* Routes */}
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/fuel-savings" component={FuelSavingsPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/home2" component={Home} />
              <Route component={NotFoundPage} />
            </Switch>


        </Container>

      </div>




    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
