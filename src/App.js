// 应用的根组件
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Admin from './views/admins/admin';
import Login from './views/login/login';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>/*多个符合时，匹配其中一个，Route的顺序也有关*/
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
      </Router>
    )
  }
}