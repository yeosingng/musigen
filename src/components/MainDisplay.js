import React, { Component } from 'react';
import './stylesheets/MainDisplay.css';

class MainDisplay extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id='main_display'>
        <div id='intro_text'>You are logged in </div>
      </div>
    );
  }
}

export default MainDisplay;
