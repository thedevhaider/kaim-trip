import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
import PageHeader from '../components/others/PageHeader';
import {getPlaces} from '../utils/data';
import InfinitScroll from 'react-infinite-scroll-component';
import SinglePlaceDiv from "../components/others/SinglePlaceDiv";

class AllPlaces extends Component {
  constructor(props) {
      super(props);
      // Set Default state
      this.state = {
        placesData : [],
        isLoadingDestination:true,
        skip:0,
        limit:10,
        hasMore:true
      };
    this.getNextplaces = this.getNextplaces.bind(this)
    }
    componentDidMount() {
      // Get Initial places.
        getPlaces(this.state.skip,this.state.limit)
        .then((responseJson) => {
          this.setState({ placesData : responseJson,isLoadingDestination:false })
        })
        .catch((error) => {
          console.error(error);
        });
      }
      // Update the places.
      componentDidUpdate(prevProps, prevState) {
        if (prevState.placesData.length !== this.state.placesData.length) {
          this.setState({
            placesData: this.state.placesData
          })
        }
      }
      // Get Next places while Scrolling.
      getNextplaces(){
        this.setState({skip: this.state.skip + this.state.limit})
        getPlaces(this.state.skip,this.state.limit)
        .then((responseJson) => {
          if(responseJson.length === 0 )
            this.setState({hasMore:false})
          this.setState({ placesData : this.state.placesData.concat(responseJson),isLoadingDestination:false })
        })
        .catch((error) => {
          console.error(error);
        });
      }
  render() {
    var { placesData } = this.state;
    let placesDataMarkup =
      placesData && placesData && placesData.length > 0 ? (
        placesData.map((not) => {
          return (
            <div key={not.id} className="col-lg-4 col-md-6">
              <SinglePlaceDiv data={not}/>
            </div>
          );
        })
      ) : (
        <div>
        No Places to Visit. Please Check Later
        </div>
      );
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
              <title>All places to Visit | Kaim Trip</title>
              <meta name="description" content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!" />
            </Helmet>
            {
              // Set the Page Header
            }
            <PageHeader name="All Treks" tagline="KaimTrip covers almost all the most popular treks along with well-trained guides. All these treks vary in terms of difficulty, duration, cultural elements, and of course, remoteness. Depending upon these factors within your budget you can make your decision as to which trek would be the most suitable for you." banner = {"/img/banner/bradcam2.png"}/>
            {!this.state.isLoadingDestination ?
                  <InfinitScroll
                  dataLength = {this.state.placesData.length}
                  next = {this.getNextplaces}
                  hasMore = {this.state.hasMore}
                  loader={loadingDiv}
                >
                <div id="places" className="popular_places_area">
                  <div className="container">
                    <div className="row justify-content-center">
                    </div>
                    <div className="row">
                      {placesDataMarkup}
                    </div>
                  </div>
                </div>
                </InfinitScroll>
            : loadingDiv }

        </div>
    );
  }
}

export default AllPlaces;
