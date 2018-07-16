import React, { Component } from 'react';
import './stylesheets/MainArea.css';

class MainArea extends Component {

  constructor(props){
    super(props);
    this.loginOnClick = this.loginOnClick.bind(this);
  }

  loginOnClick(){
    console.log("ok");
    fetch('/login')
    .then(data => {
      console.log(data);
      window.location = data.url;
    })
    .catch(rejected => {
      console.log(rejected);
    });
  }

  render(){
    return (
      <div id='main_display'>
        <div id='intro_text'>Welcome to Musigen</div>
        <div id="login_prompt">
          <h1>First, log in to spotify</h1>
          <div id='login_button' onClick={this.loginOnClick}>Log in</div>
        </div>
      </div>
    );
  }
}

export default MainArea;
