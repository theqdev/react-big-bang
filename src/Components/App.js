import React, { Component } from 'react'
import PropTypes from 'prop-types';
import AppNavigation from "../Navigation/Routes";
import Footer from "./Footer";
import MainMenu from "./MainMenu";

class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column h-100">
        <MainMenu history={this.props.history}/>
        <div className="flex-fill">
          <AppNavigation/>
        </div>
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
