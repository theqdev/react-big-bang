import React, { Component } from 'react'

import NotFoundPage from '../Component/NotFoundPage';
import Home from '../Container/Home';
import Posts from '../Container/Posts';
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
