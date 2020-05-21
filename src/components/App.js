import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

const KEY = 'AIzaSyDqRkoYho0fvow02A6XBzFGGQpyTnc9cVU';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    console.log(term);

    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
      },
    });
    console.log(response.data.items); //Array(5)

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    console.log('onVideoSelect', video);
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{' '}
        {this.state.videos.length} videos.
        <VideoDetail />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
