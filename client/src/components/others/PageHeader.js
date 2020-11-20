import React, { Component } from "react";

class PageHeader extends Component {
  render() {
    return (
      <div
        style={{ backgroundImage: `url(${this.props.banner})` }}
        className="bradcam_area bradcam_bg_3"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam_text text-center">
                <h3>{this.props.name}</h3>
                <p style={{ "font-family": "Comic Sans MS" }}>
                  {this.props.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PageHeader;
