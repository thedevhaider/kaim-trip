import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Slider from "../components/index/slider";
import PopularDestinations from "../components/index/PopularDestinations";
import VideoTestimonial from "../components/index/VideoTestimonial";
import PopularPlaces from "../components/index/PopularPlaces";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { getDestinations, getPlaces } from "../utils/data";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placesData: null,
      isLoadingDestination: true,
      isLoadingPlace: true,
      destinationsData: null,
    };
  }
  componentDidMount() {
    getDestinations(0, 6)
      .then((responseJson) => {
        this.setState({
          destinationsData: responseJson,
          isLoadingDestination: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
    getPlaces(0, 6)
      .then((responseJson) => {
        this.setState({ placesData: responseJson, isLoadingPlace: false });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    let loadingDiv = (
      <div
        style={{
          width: "100%",
          height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
      </div>
    );
    return (
      <>
        {!this.state.isLoadingDestination ? (
          <Slider data={this.state.destinationsData} />
        ) : (
          loadingDiv
        )}
        <div>
          <Helmet>
            <title>Kaim Trip</title>
            <meta
              name="description"
              content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!"
            />
          </Helmet>
          {!this.state.isLoadingDestination ? (
            <PopularDestinations data={this.state.destinationsData} />
          ) : (
            loadingDiv
          )}
          {!this.state.isLoadingPlace ? (
            <PopularPlaces data={this.state.placesData} />
          ) : (
            loadingDiv
          )}
          <VideoTestimonial />
        </div>
      </>
    );
  }
}

export default Index;
