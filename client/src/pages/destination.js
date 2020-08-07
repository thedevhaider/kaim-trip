import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Slider from '../components/index/slider';
import DestinationDetails from '../components/destination/DestinationDetails';

class Destination extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.destination)
  }
  render() {
    return (
        <div>
            <Helmet>
              <title>Kaim Trip</title>
              <meta name="description" content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!" />
            </Helmet>
            <Slider/>
            <DestinationDetails/>
        </div>
    );
  }
}

export default Destination;
