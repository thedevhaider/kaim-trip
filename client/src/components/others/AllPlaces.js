import React, { Component } from "react";
import SinglePlaceDiv from "./SinglePlaceDiv";

class AllPlaces extends Component {
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
              <SinglePlaceDiv data={not}/>
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

export default AllPlaces;
