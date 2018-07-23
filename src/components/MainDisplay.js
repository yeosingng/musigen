import React, { Component } from 'react';
import './stylesheets/MainDisplay.css';
import MusicPlayer from './MusicPlayer';

class MainDisplay extends Component {
  render(){
    return (
      <div id='main_display'>
        <MusicPlayer appState={this.props.appState}/>
      </div>
    );
  }
}

export default MainDisplay;
