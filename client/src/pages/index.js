import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Slider from '../components/index/slider';
import PopularDestinations from '../components/index/PopularDestinations';
import VideoTestimonial from '../components/index/VideoTestimonial';
import PopularPlaces from '../components/index/PopularPlaces';

class Index extends Component {
  render() {
    return (
        <div>
            <Helmet>
              <title>Kaim Trip</title>
              <meta name="description" content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!" />
            </Helmet>
            <Slider/>
            <PopularDestinations/>
            <PopularPlaces/>
            <VideoTestimonial/>
        </div>
    );
  }
}

export default Index;
