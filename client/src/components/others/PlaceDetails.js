import React, { Component } from "react";
import Youtube from "./YouTube";
import ImageGallery from "./ImageGallery";

class PlaceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  render() {
    var { data } = this.state;
    let daysMarkup =
      data && data.schedule && data.schedule.length > 0 ? (
        data.schedule.map((day, index) => {
          if (index % 2 === 0) {
            return (
              <div className="single_destination">
                <div className="section-top-border">
                  <h3 className="mb-30">{`Day ${index + 1}`}</h3>
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src={day}
                        alt=""
                        style={{ width: "263px", height: "180px" }}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-9 mt-sm-20">
                      <p>{day.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="single_destination">
                <div className="section-top-border text-right">
                  <h3 className="mb-30">{`Day ${index + 1}`}</h3>
                  <div className="row">
                    <div className="col-md-9 mt-sm-20">
                      <p>{day.description}</p>
                    </div>
                    <div className="col-md-3">
                      <img src={day} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })
      ) : (
        <div></div>
      );
    return (
      <fragment>
        <div className="destination_details_info">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-9">
                <div className="destination_info">
                  <h3>Description</h3>
                  <p>{data.description}</p>
                  <h3>
                    {data && data.schedule && data.schedule.length > 0
                      ? `Total Duration of Journey ${data.duration}`
                      : ""}
                  </h3>
                  {daysMarkup}
                </div>
              </div>
            </div>
          </div>
          {data.youtube ? <Youtube videoLink={data.youtube} /> : ""}
        </div>
        {data.images ? (
          <ImageGallery images={data.images} name={data.name} />
        ) : (
          ""
        )}
      </fragment>
    );
  }
}

export default PlaceDetails;
