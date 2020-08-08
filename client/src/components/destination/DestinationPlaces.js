import React, { Component } from "react";

class DestinationPlaces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : this.props.data
        };
      }
  render() {
      var {data} = this.state;
      let dataMarkup =
      data && data.dateData && data.dateData.length > 0 ? (
        data.dateData.map((not) => {
          return (
            <div key={not.id} className="col-lg-4 col-md-6">
                <div className="single_place">
                  <div className="thumb">
                    <img src="/img/place/1.png" alt="" />
                    <a href="/" className="prise">$500</a>
                  </div>
                  <div className="place_info">
                    <a href="destination_details.html"><h3>California</h3></a>
                    <p>United State of America</p>
                    <div className="rating_days d-flex justify-content-between">
                      <span className="d-flex justify-content-center align-items-center">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <a href="/">(20 Review)</a>
                      </span>
                      <div className="days">
                        <i className="fa fa-clock-o" />
                        <a href="/">5 Days</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          );
        })
      ) : (
        <div>
          You have no data yet
        </div>
      );
    return (
        <div className="popular_places_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section_title text-center mb_70">
                  <h3>All Places to Visit in {data.name}</h3>
                  <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                </div>
              </div>
            </div>
            <div className="row">
              {dataMarkup}
            </div>
          </div>
        </div>
    );
  }
}

export default DestinationPlaces;