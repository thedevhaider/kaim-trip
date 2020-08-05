import React, { Component } from "react";
import Slider from '../components/index/slider';
import PopularDestinations from '../components/index/PopularDestinations';
import VideoTestimonial from '../components/index/VideoTestimonial';
import PopularPlaces from '../components/index/PopularPlaces';

class Index extends Component {
  render() {
    return (
        <div>
            <Slider/>
            <PopularDestinations/>
            <PopularPlaces/>
            <VideoTestimonial/>
        </div>
    );
  }
}

export default Index;
