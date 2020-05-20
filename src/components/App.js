import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyDqRkoYho0fvow02A6XBzFGGQpyTnc9cVU';

class App extends React.Component {
  onTermSubmit = (term) => {
    console.log(term);

    youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: KEY,
      },
    });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail />
      </div>
    );
  }
}

export default App;
