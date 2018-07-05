import React, { Component } from 'react';

class Sidebar extends Component {
  render(){
    return (
      <div id='sidebar'>
        <div id='sidebar_container'>
          <div className='sidebar_selection'>YOUR MUSIC</div>
          <div className='sidebar_selection'>GENERATE</div>
          <div className='sidebar_selection'>SESSION</div>
        </div>
        <div id='sidebar_divider'></div>
      </div>
    );
  }
}

export default Sidebar;
