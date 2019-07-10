import React, { Component } from "react";
import { Route } from 'react-router-dom';
import "./style.scss";
import Menu from '../menu';
import Home from '../home'
import Info from '../info'

class Introduce extends Component {
  render() {
    return (
      <div className="container">
          <Menu />
          <Route exact path='/' component={ Home } />
          <Route exact path='/info' component={ Info } />
      </div>
    );
  }
}

export default Introduce;
