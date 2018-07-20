import React, { Component } from 'react';
import './App.css';

import LoginPage from './components/LoginPage';
import Sidebar from './components/Sidebar';
import MainDisplay from './components/MainDisplay';

import {getUser} from './api.js';

class App extends Component {

  constructor(){
    super();
    const params = this.getHashParams();
    this.state = {
      isLoggedIn: params.access_token ? true : false,
      access_token: params.access_token,
      username: '',
      room: 'login'
    };
  };

  componentDidMount(){
    if (this.state.isLoggedIn) {
      getUser(this.state.access_token)
      .then(data =>
        this.setState({
          username: data.display_name
        })
      );
    };
  };

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let main_display;

    if (isLoggedIn) {
      main_display =
      <div id='app_space'>
       <Sidebar />
       <MainDisplay appState={this.state} />
      </div>
    } else {
      main_display =
      <div id='app_space'>
       <LoginPage />
      </div>
    }

    return (
      <div id="parent">
        <div id='header'>
            <div id='main_title'>MUSI<span id="zonespan">GEN</span></div>
            <div id='about'>ABOUT</div>
        </div>
        <div id='header_sep'></div>
        {main_display}
     </div>
    );
  };
}

export default App;
