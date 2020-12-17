import React, { Component } from "react";

class PopularDestinations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  render() {
    var { data } = this.state;
    let PopularDestinationsMarkup =
      data && data.length > 0 ? (
        data.map((not) => {
          return (
            <div key={not._id} className="col-lg-4 col-md-6">
              <a
                href={`/destination/${not.name
                  .toLowerCase()
                  .replace(/\s/g, "-")}-${not.tagline
                  .toLowerCase()
                  .replace(/\s/g, "-")}/${not._id
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
              >
                <div className="single_destination">
                  <div className="thumb">
                    <img src={not.thumbnail} alt={not.name} />
                  </div>
                  <div className="content">
                    <p className="d-flex align-items-center">
                      {" "}
                      {not.name}
                      <a
                        href={`/destination/${not.name
                          .toLowerCase()
                          .replace(
                            /\s/g,
                            "-"
                          )}-${not.tagline
                          .toLowerCase()
                          .replace(/\s/g, "-")}/${not._id
                          .toLowerCase()
                          .replace(/\s/g, "-")}`}
                      >
                        {" "}
                        {not.places.length} {not.places.length > 1 ? 'Places' : 'Place'}
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          );
        })
      ) : (
        <div>''</div>
      );
    return (
      <div className="popular_destination_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section_title text-center mb_70">
                <h3>Popular Destinations</h3>
                <p>
                With a country full of fascinating destinations, choosing the perfect vacation spot can present a great challenge for you. 
                That's why KaimTrip has used expert opinions, current trends, reader votes, scenic beauty, food scenes and more to compile this list of India's best places to visit.
                </p>
              </div>
            </div>
          </div>
          <div className="row">{PopularDestinationsMarkup}</div>
          <div className="row">
            <div className="col-lg-12">
              <div className="more_place_btn text-center">
                <a className="boxed-btn4" href="/destinations">
                  More Destinations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularDestinations;