import React, { Component } from "react";

class PopularDestinations extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data : null
        };
      }
      componentDidMount() {
          this.renderMyData();
      }
      renderMyData(){
          fetch('https://picsum.photos/v2/list?limit=10')
              .then((response) => response.json())
              .then((responseJson) => {
                this.setState({ data : responseJson })
              })
              .catch((error) => {
                console.error(error);
              });
      }
  render() {
      var {data} = this.state;
      let notificationsMarkup =
      data && data.length > 0 ? (
        data.map((not) => {
          return (
            <div key={not.id} className="col-lg-4 col-md-6">
              <div className="single_destination">
                <div className="thumb">
                  <img src="https://loremflickr.com/cache/resized/65535_50105863426_d998931175_320_240_nofilter.jpg" alt="{not.author}" />
                </div>
                <div className="content">
                  <p className="d-flex align-items-center">
                    {not.author} <a href={`/destination/${not.author}`}> {not.id} Places</a>{" "}
                  </p>
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
      <div className="popular_destination_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center mb_70">
                <h3>Popular Destination</h3>
                <p>
                  Suffered alteration in some form, by injected humour or good
                  day randomised booth anim 8-bit hella wolf moon beard words.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
          {notificationsMarkup}
          </div>
        </div>
      </div>
    );
  }
}

export default PopularDestinations;
