import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
import AllPlacesComponent from '../components/others/AllPlaces';
import PageHeader from '../components/others/PageHeader';
import {getPlaces} from '../utils/data';


class AllPlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placesData : null,
      isLoadingplace:true
    };
  }
    componentWillMount() {
      getPlaces(0,6)
      .then((responseJson) => {
        this.setState({ placesData : responseJson,isLoadingplace:false })
      })
      .catch((error) => {
        console.error(error);
      });
    }
  render() {
    var {placesData} = this.state;
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
              <title>All Places to Visit | Kaim Trip</title>
              <meta name="description" content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!" />
            </Helmet>
            <PageHeader name="All Places" tagline="All Places" banner = {"/img/banner/bradcam2.png"}/>
            {!this.state.isLoadingplace ? <AllPlacesComponent data ={placesData}/> : loadingDiv }
        </div>
    );
  }
}

export default AllPlaces;
