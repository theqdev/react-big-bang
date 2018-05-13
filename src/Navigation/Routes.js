import React, { Component } from 'react'

import HomePage from '../Components/HomePage';
import NotFoundPage from '../Components/NotFoundPage';
import Home from '../Containers/Home';
import Example from '../Containers/Example';
import {Route, Switch} from "react-router-dom";


class AppNavigation extends Component {

  render(){
  return(

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/example" component={Example}/>
      {/*<Route path="/fuel-savings" component={FuelSavingsPage}/>*/}
      {/*<Route path="/about" component={AboutPage}/>*/}
      {/*<Route path="/home2" component={Home}/>*/}
      <Route component={NotFoundPage}/>
    </Switch>

  )
}

}

// AppNavigation.propTypes = {
//   children: PropTypes.element
// };

export default AppNavigation;
