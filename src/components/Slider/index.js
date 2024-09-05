import React, {Component} from 'react'
import './Slider.css'

class Slider extends Component {
  render() {
    const {video} = this.props

    return (
      <div className="slider-container">
        <h2>{video.Thumbnail_Title}</h2>
        <video width="100%" controls>
          <source src={video.Contents[0]?.Url || ''} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>{video.Description}</p>
        <a
          href={video.AssociatedProductList[0]?.productURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {video.AssociatedProductList[0]?.productdisplayName}
        </a>
      </div>
    )
  }
}

export default Slider
