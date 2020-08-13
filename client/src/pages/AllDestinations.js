import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
import AllDestinationsComponent from '../components/others/AllDestinations';
import PageHeader from '../components/others/PageHeader';
import {getDestinations} from '../utils/data';

class AllDestinations extends Component {
  constructor(props) {
      super(props);
      this.state = {
        destinationsData : null,
        isLoadingDestination:true,
        skip:0,
        limit:10
      };
    }
      componentWillMount() {
        this.getResponse();
      }
      getResponse = function() {
        getDestinations(this.state.skip,this.state.limit)
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
    return (
        <div>
            <Helmet>
              <title>All Destinations to Visit | Kaim Trip</title>
              <meta name="description" content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!" />
            </Helmet>
            <PageHeader name="All Destinations" tagline="All Destinations" banner = {"/img/banner/bradcam2.png"}/>
            {!this.state.isLoadingDestination ? <AllDestinationsComponent data ={this.state.destinationsData}/> : loadingDiv }
        </div>
    );
  }
}

export default AllDestinations;
