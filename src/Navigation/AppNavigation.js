import React, { Component } from 'react'

import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Home from '../containers/Home';
import {Route, Switch} from "react-router-dom";


class AppNavigation extends Component {

  render(){
  return(

    <Switch>
      <Route exact path="/" component={HomePage}/>
      {/*<Route path="/fuel-savings" component={FuelSavingsPage}/>*/}
      {/*<Route path="/about" component={AboutPage}/>*/}
      <Route path="/home2" component={Home}/>
      <Route component={NotFoundPage}/>
    </Switch>



  )
}

}

// AppNavigation.propTypes = {
//   children: PropTypes.element
// };

export default AppNavigation;
