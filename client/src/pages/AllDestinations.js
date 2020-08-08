import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Slider from '../components/index/slider';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class AllDestinations extends Component {
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
    return (
        <div>
            <Helmet>
              <title>Kaim Trip</title>
              <meta name="description" content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!" />
            </Helmet>
            <Slider/>
        </div>
    );
  }
}

export default AllDestinations;
