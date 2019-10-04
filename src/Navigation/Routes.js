import React, { Component } from 'react'

import NotFoundPage from '../Containers/NotFoundPage';
import Home from '../Containers/Home';
import Posts from '../Containers/Posts';
import Docs from '../Containers/Docs';
import {Route, Switch} from "react-router-dom";



class AppNavigation extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/documentation" component={Docs}/>
        <Route component={NotFoundPage}/>
      </Switch>

    )
  }
}

export default AppNavigation;
