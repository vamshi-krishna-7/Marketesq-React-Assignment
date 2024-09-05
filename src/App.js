import {Component} from 'react'

import Menu from './components/Menu'
import Playlist from './components/Playlist'
import Slider from './components/Slider'

import './App.css'

class App extends Component {
  state = {playlistData: [], selectedPlaylist: {}, selectedVideo: null}

  componentDidMount() {
    this.getPlaylistDetails()
  }

  getPlaylistDetails = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({Content_Type: 2}),
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
        'X-Tenant-Key': 'TYKE070323',
      },
    }
    const response = await fetch(
      'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList',
      options,
    )
    const fetchData = await response.json()

    const {data} = fetchData
    this.setState({playlistData: data})
  }

  handlePlaylistSelect = playlist => {
    this.setState({selectedPlaylist: playlist})
  }

  render() {
    const {playlistData, selectedPlaylist} = this.state

    return (
      <div className="app-container">
        <Menu
          playlists={playlistData}
          onSelectPlaylist={this.handlePlaylistSelect}
        />
        <Playlist selectedPlaylist={selectedPlaylist} />

        {selectedVideo && <Slider video={selectedVideo} />}
      </div>
    )
  }
}

export default App
