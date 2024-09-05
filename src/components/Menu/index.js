import {Component} from 'react'

import './index.css'

class Menu extends Component {
  render() {
    const {playlists, onSelectPlaylist} = this.props

    return (
      <div className="menu-container">
        <h2 className="head-playlist">Playlists</h2>
        <ul>
          {playlists.map(playlist => (
            <li
              key={playlist.PlayListId}
              onClick={() => onSelectPlaylist(playlist)}
            >
              {playlist.Name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Menu
