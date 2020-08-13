import React, { Component } from "react";
import SinglePlaceDiv from "../others/SinglePlaceDiv";

class PopularPlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : this.props.data
    };
  }
  render() {
      var {data} = this.state;
      let dataMarkup =
      data && data.length > 0 ? (
        data.map((not) => {
          return (
            <div key={not._id} className="col-lg-4 col-md-6">
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
        <div className="popular_places_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section_title text-center mb_70">
                  <h3>Popular Places</h3>
                  <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                </div>
              </div>
            </div>
            <div className="row">
              {dataMarkup}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="more_place_btn text-center">
                  <a className="boxed-btn4" href="/places">More Places</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default PopularPlaces;
