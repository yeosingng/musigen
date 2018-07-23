import React, { Component } from 'react';
import './stylesheets/MusicPlayer.css';
import {getSavedTracks} from '../api.js';

class MusicPlayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tracks: []
    };
  }

  componentDidMount(){
    getSavedTracks(this.props.appState.access_token)
    .then(data =>
      // console.log(data.items)
      this.setState({
        tracks: data.items
      })
    )
  }

  render(){
    return (
      <div id='music_player'>
        <div id='player_options'>
          <button id='create_tag_button'>Create Tag</button>
          <div id='filter'>
            <div id='filter_text'>FILTER BY: </div>
          </div>
          <div id='sort'>
            <div id='sort_text'>SORT: </div>
          </div>
        </div>
        <div id='music_headers'>
          <div id='header_space'></div>
          <div id='song_title_header' className='main_header'>Title</div>
          <div id='song_artist_header' className='main_header'>Artist</div>
          <div id='song_album_header' className='main_header'>Album</div>
        </div>
        <div id='song_container'>
            <div className='song'>
              <div className='play_button'>PLAY</div>
              <div className='tag_button'>TAG</div>
              <div className='song_name'>Midsummer Madness</div>
              <div className='song_artist'>88 Rising</div>
              <div className='song_album'>Head in the Clouds</div>
            </div>
            {this.state.tracks.map((song) =>
              <div className='song'>
                <div className='play_button'>PLAY</div>
                <div className='tag_button'>TAG</div>
                <div className='song_name'>{song.track.name}</div>
                <div className='song_artist'>{song.track.artists[0].name}</div>
                <div className='song_album'>{song.track.album.name}</div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default MusicPlayer;
