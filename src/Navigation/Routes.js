import React, { Component } from 'react'

import NotFoundPage from '../Components/NotFoundPage';
import Home from '../Containers/Home';
import GetExample from '../Containers/GetExample';
import {Route, Switch} from "react-router-dom";


class AppNavigation extends Component {

  render(){
  return(

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/example" component={GetExample}/>
      <Route component={NotFoundPage}/>
    </Switch>

  )
}

}

// AppNavigation.propTypes = {
//   children: PropTypes.element
// };

export default AppNavigation;
