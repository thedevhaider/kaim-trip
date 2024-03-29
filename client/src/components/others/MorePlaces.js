import React, { Component } from "react";
import SinglePlaceDiv from "../others/SinglePlaceDiv";

class MorePlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  render() {
    var { data } = this.state;
    let dataMarkup =
      data && data && data.length > 0 ? (
        data.map((not) => {
          return (
            <div key={not.id} className="col-lg-4 col-md-6">
              <SinglePlaceDiv data={not} />
            </div>
          );
        })
      ) : (
        <div></div>
      );
    return (
      <div id="places" className="popular_places_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center mb_70">
                {data.length > 0 ? <h3>More Places</h3> : ""}
              </div>
            </div>
          </div>
          <div className="row">{dataMarkup}</div>
        </div>
      </div>
    );
  }
}

export default MorePlaces;
