import React, { Component } from "react";
import Youtube from '../others/YouTube';

class VideoTestimonial extends Component {
  render() {
    return (
        <div>
        {this.props.videoLink ? <Youtube/> :''}
        <div className="travel_variation_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single_travel text-center">
                  <div className="icon">
                    <img src="img/svg_icon/1.svg" alt="" />
                  </div>
                  <h3>Comfortable Journey</h3>
                  <p>KaimTrip will provide you the most comfortable and Safe journey So that you can enjoy your trip at the very best level.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single_travel text-center">
                  <div className="icon">
                    <img src="img/svg_icon/2.svg" alt="" />
                  </div>
                  <h3>Luxuries Hotel</h3>
                  <p>Most premium and luxurious hotels, cottages, and camps will be provided to you without any hassle.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single_travel text-center">
                  <div className="icon">
                    <img src="img/svg_icon/3.svg" alt="" />
                  </div>
                  <h3>Travel Guide</h3>
                  <p>KaimTrip provides you very well-trained travel guides to ensure you safe and proper guidance for your travel experience.</p>
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
                          <p>For work and leisure, I travel a lot and always use KaimTrip to find the best places to chill or to discover the best things to explore.</p>
                          <div className="testmonial_author">
                            <h3>- Karrar Hussain</h3>
                            <h3>(Chief Editor, Wednesday Times Magazine)</h3>
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
