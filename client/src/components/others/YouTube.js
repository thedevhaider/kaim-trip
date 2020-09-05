import React, { Component } from "react";
import ReactPlayer from 'react-player'

class YoTube extends Component {
  render() {
    return (
        <div className="video_area video_bg overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="video_wrap text-center">
                <h3>Enjoy Video</h3>
                  <div className='player-wrapper'>
                    <ReactPlayer
                      url={this.props.videoLink}
                      className='react-player'
                      loop
                      controls="false"
                      width='100%'
                      height='100%'
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YoTube;
