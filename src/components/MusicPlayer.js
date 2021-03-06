import React, { Component } from 'react';
import './stylesheets/MusicPlayer.css';
import {getSavedTracks} from '../api.js';
import InfiniteScroll from 'react-infinite-scroller';

class MusicPlayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tracks: [],
      hasMoreItems: true,
      offset: 0,
      requestOngoing: false
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore(page) {
    if (!this.state.requestOngoing){
      this.setState({
        requestOngoing: true
      });
      getSavedTracks(this.props.appState.access_token, this.state.offset)
      .then(data => {
        var currTracks = this.state.tracks;
        var newTracks = currTracks.concat(data.items);
        console.log(newTracks);
        if (data.next) {
          this.setState({
            tracks: newTracks,
            offset: this.state.offset + 20,
            requestOngoing: false
          });
        } else {
          this.setState({
            hasMoreItems: false,
            requestOngoing: false
          });
        }
      });
    }
  }

  render(){
    const loader = <div id='song_container'>Loading ... </div>;
    var items = [];
    this.state.tracks.map((song) => {
      items.push(
        <div className='song'>
          <div className='play_button'>PLAY</div>
          <div className='tag_button'>TAG</div>
          <div className='song_name_container'>
            <div className='song_name'>{song.track.name}</div>
          </div>
          <div className='song_artist'>{song.track.artists.map((artist) => artist.name).join(', ')}</div>
          <div className='album_name_container'>
            <div className='song_album'>{song.track.album.name}</div>
          </div>
        </div>
      );
    });

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
        <InfiniteScroll
          id='song_container'
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={this.state.hasMoreItems}
          loader={loader}
        >
        {items}
        </InfiniteScroll>
      </div>
    );
  }
}

export default MusicPlayer;
