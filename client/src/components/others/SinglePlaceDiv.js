import React, { Component } from "react";

class SinglePlaceDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PlaceData: this.props.data,
    };
  }
  render() {
    const {PlaceData} = this.state;
    return (
        <div className="single_place">
                  <div className="thumb">
                    <img src={PlaceData.thumbnail} alt="" />
                    <a href="/" className="prise">Rs. {PlaceData.budget}</a>
                  </div>
                  <div className="place_info">
                    <a href={`/place/${PlaceData.name.toLowerCase().replace(/\s/g, "-")}-${PlaceData.tagline.toLowerCase().replace(/\s/g, "-")}/${PlaceData._id}`}><h3>{PlaceData.name}</h3></a>
                    <p>{PlaceData.tagline}</p>
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
                        <a href="/">{PlaceData.duration} Days</a>
                      </div>
                    </div>
                  </div>
        </div>
    );
  }
}

export default SinglePlaceDiv;
