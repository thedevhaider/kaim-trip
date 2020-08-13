import React, { Component } from "react";
import SinglePlaceDiv from "../others/SinglePlaceDiv";

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
      data && data.placesData && data.placesData.length > 0 ? (
        data.placesData.map((not) => {
          return (
            <div key={not.id} className="col-lg-4 col-md-6">
                <SinglePlaceDiv data={not}/>
              </div>
          );
        })
      ) : (
        <div key="1" className="col-lg-4 col-md-6">
          No Places to Visit.Please Check Later
      </div>
      );
    return (
        <div id="places" className="popular_places_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section_title text-center mb_70">
                  <h3>All Places to Visit in {data.name}</h3>
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
