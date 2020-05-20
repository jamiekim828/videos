import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyDqRkoYho0fvow02A6XBzFGGQpyTnc9cVU';

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    console.log(term);

    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: KEY,
      },
    });
    console.log(response.data.items); //Array(5)

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{' '}
        {this.state.videos.length} videos.
        <VideoDetail />
      </div>
    );
  }
}

export default App;
