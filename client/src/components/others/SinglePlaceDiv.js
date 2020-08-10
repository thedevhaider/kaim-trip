import React, { Component } from "react";

class SinglePlaceDiv extends Component {
  render() {
    return (
        <div className="single_place">
                  <div className="thumb">
                    <img src="/img/place/1.png" alt="" />
                    <a href="/" className="prise">$500</a>
                  </div>
                  <div className="place_info">
                    <a href="destination_details.html"><h3>{this.props.data.name}</h3></a>
                    <p>{this.props.data.name}</p>
                    <div className="rating_days d-flex justify-content-between">
                      <span className="d-flex justify-content-center align-items-center">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </span>
                      <div className="days">
                        <i className="fa fa-clock-o" />
                        <a href="/">{this.props.data.id} Days</a>
                      </div>
                    </div>
                  </div>
        </div>
    );
  }
}

export default SinglePlaceDiv;
