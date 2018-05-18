import React, { Component } from 'react'

import NotFoundPage from '../Components/NotFoundPage';
import Home from '../Containers/Home';
import Posts from '../Containers/Posts';
import {Route, Switch} from "react-router-dom";


class AppNavigation extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/example" component={Posts}/>
        <Route component={NotFoundPage}/>
      </Switch>

    )
  }
}

export default AppNavigation;
