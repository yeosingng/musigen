import React, { Component } from 'react';
import './stylesheets/LoginPage.css';

class LoginPage extends Component {
  render(){
    return (
      <div id='main_display'>
        <div id='intro_text'>Welcome to Musigen, you must login to Spotify to use this application</div>
        <div id="login_prompt">
          <a href='http://localhost:8888'>
            <button>First, log in to spotify</button>
          </a>
        </div>
      </div>
    );
  }
}

export default LoginPage;
