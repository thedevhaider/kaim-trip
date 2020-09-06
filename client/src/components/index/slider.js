import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : this.props.data
    };
  }
  render() {
    console.log(this.state.data)
    return (
        <div className="slider_area">
          <div className="slider_active owl-carousel">
            <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-12 col-md-12">
                    <div className="slider_text text-center">
                      <h3>Indonesia</h3>
                      <p>Pixel perfect design with awesome contents</p>
                      <a href="/" className="boxed-btn3">Explore Now</a>
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


export default (Slider);
