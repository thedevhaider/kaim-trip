import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  render() {
    var { data } = this.state;
    let dataMarkup =
      data && data.length > 0 ? (
        data.map((not) => {
          return (
            <div className="slider_area">
              <div className="slider_active">
                <div
                  className="single_slider  d-flex align-items-center slider_bg_1"
                  style={{ backgroundImage: `url(${not.banner})` }}
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-xl-12 col-md-12">
                        <div className="slider_text text-center">
                          <h3>{not.name}</h3>
                          <p style={{ "font-family": "Comic Sans MS" }}>
                            {not.tagline}{" "}
                          </p>
                          <a
                            href={`/destination/${not.name
                              .toLowerCase()
                              .replace(
                                /\s/g,
                                "-"
                              )}-${not.tagline
                              .toLowerCase()
                              .replace(
                                /\s/g,
                                "-"
                              )}/${not._id.toLowerCase().replace(/\s/g, "-")}`}
                            className="boxed-btn3"
                          >
                            Explore Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div></div>
      );
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 2500,
      cssEase: "linear",
    };
    return (
      <div
        style={{
          "overflow-x": "hidden",
          overflow: "hidden",
          height: "auto",
          "padding-bottom": "30px",
        }}
      >
        <Slider {...settings}>{dataMarkup}</Slider>
      </div>
    );
  }
}

export default slider;
