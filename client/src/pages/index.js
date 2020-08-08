import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Slider from '../components/index/slider';
import PopularDestinations from '../components/index/PopularDestinations';
import VideoTestimonial from '../components/index/VideoTestimonial';
import PopularPlaces from '../components/index/PopularPlaces';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Index extends Component {
  constructor(props) {
      super(props);
      this.state = {
        data : null,
        isLoading:true
      };
    }
      componentWillMount() {
         this.renderMyData();
      }
      renderMyData(){
        fetch('https://picsum.photos/v2/list?limit=10')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({ data : responseJson,isLoading:false })
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
              <title>Kaim Trip</title>
              <meta name="description" content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!" />
            </Helmet>
            <Slider/>
            {!this.state.isLoading ? <PopularDestinations data ={this.state.data}/> : loadingDiv }
            {!this.state.isLoading ? <PopularPlaces data ={this.state.data}/> : loadingDiv }
            <VideoTestimonial/>
        </div>
    );
  }
}

export default Index;
