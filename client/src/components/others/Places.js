import React, { Component } from "react";

class Destinations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  render() {
    var {data} = this.state;
    let dataMarkup =
      data && data && data.length > 0 ? (
        data.map((not) => {
          return (
            <div key={not.id} className="col-lg-4 col-md-6">
                <div className="single_place">
                  <div className="thumb">
                    <img src="img/place/1.png" alt="" />
                    <a href="/" className="prise">$500</a>
                  </div>
                  <div className="place_info">
                    <a href="destination_details.html"><h3>{not.name}</h3></a>
                    <p>{data.name}</p>
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
                        <a href="/">{not.days} Days</a>
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
        <div id="places" className="popular_places_area">
          <div className="container">
            <div className="row justify-content-center">
            </div>
            <div className="row">
              {dataMarkup}
            </div>
          </div>
        </div>
    );
  }
}

export default Destinations;
