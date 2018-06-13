import React, { Component } from 'react'
import PropTypes from 'prop-types';
import AppNavigation from "../Navigation/Routes";
import Footer from "./Footer";
import MainMenu from "./MainMenu";

class App extends Component {

  componentDidUpdate(){
  }

  render() {
    return (
      <div >
        <MainMenu history={this.props.history}/>
        <AppNavigation/>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  history : PropTypes.object,
};

export default App;
