import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import MorePlaces from '../components/others/MorePlaces';
import PlaceDetails from '../components/others/PlaceDetails';
import PageHeader from '../components/others/PageHeader';
import {getPlaceDetails,getPlaces} from '../utils/data';

class place extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreplaceData:[],
      isLoadingplace:true,
      singlePlaceData:[],
      isLoadingMorePlace:true
    }
  }
  componentDidMount() {
    // Get a Particular place details.
    getPlaceDetails(this.props.match.params.place)
    .then((responseJson) => {
      this.setState({ singlePlaceData : responseJson,isLoadingplace:false })
    })
    .catch((err) => {
      this.props.history.push("/404");
    });
    // Get MorePlaces to show.
    getPlaces(0,3)
    .then((responseJson) => {
      console.log(responseJson);
      responseJson = responseJson.filter((singlePlace) => singlePlace._id !== this.props.match.params.place);
      this.setState({ moreplaceData : responseJson,isLoadingMorePlace:false })
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
    var {singlePlaceData,isLoadingplace,moreplaceData,isLoadingMorePlace}=this.state;
    return (
        <div>
        {!isLoadingplace ?
          <Helmet>
          <title>Visit {singlePlaceData.name} by Kaim Trip</title>
          <meta name="description" content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!" />
        </Helmet>
        : '' }
        {!isLoadingplace ? <PageHeader name={singlePlaceData.name} tagline={singlePlaceData.tagline} banner = {singlePlaceData.banner}/> : loadingDiv }
        {!isLoadingplace ? <PlaceDetails data={singlePlaceData}/> : loadingDiv }
        {!isLoadingMorePlace ? <MorePlaces  data ={moreplaceData}/> : loadingDiv }
        </div>
    );
  }
}

export default place;
