import React, { Component } from "react";

class YoTube extends Component {
  render() {
    return (
        <div className="video_area video_bg overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="video_wrap text-center">
                <h3>Enjoy Video</h3>
                <div className="video_icon">
                  <a className="popup-video video_play_button" href="https://www.youtube.com/watch?v=f59dDEk57i0">
                    <i className="fa fa-play" />
                  </a>
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
