import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="parent">
        <div id='header'>
            <div id='main_title'>MUSI<span id="zonespan">GEN</span></div>
            <div id='about'>ABOUT</div>
        </div>
        <div id='header_sep'></div>
        <div id='app_space'>
          <div id='sidebar'>
            <div id='sidebar_container'>
              <div className='sidebar_selection'>YOUR MUSIC</div>
              <div className='sidebar_selection'>GENERATE</div>
              <div className='sidebar_selection'>SESSION</div>
            </div>
            <div id='sidebar_divider'></div>
          </div>
          <div id='main_display'></div>
        </div>
     </div>
    );
  }
}

export default App;
