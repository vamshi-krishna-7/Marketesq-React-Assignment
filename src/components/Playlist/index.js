import {Component} from 'react'
import './index.css'
class Playlist extends Component {
  state = {videos: [], selectedPlaylist: null, isLoading: false}

  componentDidMount() {
    this.getVideosApi()
  }

  getVideosApi = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        Index: 1,
        ContentType: [2],
        IsTagged: false,
        URL: '',
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
        'X-Tenant-Key': 'TYKE070323',
      },
    }
    const response = await fetch(
      'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1',
      options,
    )
    const dataObtained = await response.json()
    const {data} = dataObtained
    const {Feeds} = data

    const {selectedPlaylist} = this.props
    const {Post_Ids} = selectedPlaylist

    const requiredData = Feeds.filter(
      eachObject => eachObject.EngagementPostId === Post_Ids,
    )

    this.setState({videos: requiredData, isLoading : false})
  }

  render() {
    const {videos} = this.state
    return (
      <ul>
        {videos.map(each => {
          const {Thumbnail_URL, Thumbnail_Title} = each
          return (
            <li>
              <img src={Thumbnail_URL} alt={Thumbnail_Title} />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Playlist
