import React, { Component } from "react";

class VideoTestimonial extends Component {
  render() {
    return (
        <div>
        <div className="video_area video_bg overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="video_wrap text-center">
                  <h3>Enjoy Video</h3>
                  <div className="video_icon">
                  <div
                  className="video"
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                  }}
                >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                  }}
                  src="https://www.youtube.com/embed/1G4isv_Fylg"
                  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
               >
               </iframe>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="travel_variation_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single_travel text-center">
                  <div className="icon">
                    <img src="img/svg_icon/1.svg" alt="" />
                  </div>
                  <h3>Comfortable Journey</h3>
                  <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single_travel text-center">
                  <div className="icon">
                    <img src="img/svg_icon/2.svg" alt="" />
                  </div>
                  <h3>Luxuries Hotel</h3>
                  <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single_travel text-center">
                  <div className="icon">
                    <img src="img/svg_icon/3.svg" alt="" />
                  </div>
                  <h3>Travel Guide</h3>
                  <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial_area  */}
        <div className="testimonial_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="testmonial_active owl-carousel">
                  <div className="single_carousel">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <div className="single_testmonial text-center">
                          <div className="author_thumb">
                            <img src="img/testmonial/author.png" alt="" />
                          </div>
                          <p>Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                          <div className="testmonial_author">
                            <h3>- Micky Mouse</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default VideoTestimonial;
