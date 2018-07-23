import React, { Component } from 'react';
import './stylesheets/Sidebar.css';

class Sidebar extends Component {

  onMusicClick(){

  }

  render(){
    return (
      <div id='sidebar'>
        <div id='sidebar_container'>
          <div id='all_music_button'>MUSIC</div>
          <div id='sidebar_tags'>
          </div>
          <div id='sidebar_playlists'>
          </div>
        </div>
        <div id='sidebar_divider'></div>
      </div>
    );
  }
}

export default Sidebar;
