import React, { Component } from "react";

class SinglePlaceDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PlaceData: this.props.data,
    };
  }
  render() {
    const { PlaceData } = this.state;
    let RatingData = [];
    for (var i = 0; i < PlaceData.rating; i++) {
      RatingData.push(<i className="fa fa-star" />);
    }
    return (
      <div className="single_place">
        <div className="thumb">
          <a
            href={`/place/${PlaceData.name
              .toLowerCase()
              .replace(/\s/g, "-")}-${PlaceData.tagline
              .toLowerCase()
              .replace(/\s/g, "-")}/${PlaceData._id}`}
          >
            <img src={PlaceData.thumbnail} alt={PlaceData.name} />
          </a>
          <a
            href={`/place/${PlaceData.name
              .toLowerCase()
              .replace(/\s/g, "-")}-${PlaceData.tagline
              .toLowerCase()
              .replace(/\s/g, "-")}/${PlaceData._id}`}
            className="prise"
          >
            ₹ {PlaceData.budget}+
          </a>
        </div>
        <div className="place_info">
          <a
            href={`/place/${PlaceData.name
              .toLowerCase()
              .replace(/\s/g, "-")}-${PlaceData.tagline
              .toLowerCase()
              .replace(/\s/g, "-")}/${PlaceData._id}`}
          >
            <h3>
              {PlaceData.name.charAt(0).toUpperCase() + PlaceData.name.slice(1)}
            </h3>
          </a>
          <p style={{ "font-family": "Comic Sans MS" }}>{PlaceData.tagline}</p>
          <div className="rating_days d-flex justify-content-between">
            <span className="d-flex justify-content-center align-items-center">
              {RatingData}
            </span>
            <div className="days">
              <i className="fa fa-clock-o" />
              {PlaceData.duration} {PlaceData.duration > 1 ? "Days" : "Day"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePlaceDiv;
