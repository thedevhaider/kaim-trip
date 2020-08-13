import React, { Component } from "react";
import { Helmet } from "react-helmet";
import DestinationPlaces from '../components/destination/DestinationPlaces';
import PageHeader from '../components/others/PageHeader';
import {getDestinationDetails} from '../utils/data';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Destination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinationData:null,
      isLoadingDestination:true
    }
  }
  componentDidMount() {
    getDestinationDetails(this.props.match.params.destination)
    .then((responseJson) => {
      this.setState({ destinationsData : responseJson,isLoadingDestination:false })
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    let loadingDiv =
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
     </div>
     var {isLoadingDestination,destinationsData} = this.state;
    return (
        <div>
            {!isLoadingDestination ?
              <Helmet>
                <title>{destinationsData.name} | {destinationsData.tagline}  by Kaim Trip</title>
                <meta name="description" content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!" />
              </Helmet>
            : '' }
            {!isLoadingDestination ? <PageHeader tagline ={destinationsData.tagline} name ={destinationsData.name} banner ={destinationsData.banner}  /> : loadingDiv }
            {!isLoadingDestination ?
                <div className="destination_details_info">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-9">
                      <div className="destination_info">
                        <h3>About {destinationsData.name}</h3>
                        <p>{destinationsData.description}</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            : '' }
            {!isLoadingDestination ? <DestinationPlaces data ={destinationsData}/> : loadingDiv }
        </div>
    );
  }
}

export default Destination;
