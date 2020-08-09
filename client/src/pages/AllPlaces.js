import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'
import Places from '../components/others/Places';
import PageHeader from '../components/others/PageHeader';

class AllPages extends Component {
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
        fetch('https://jsonplaceholder.typicode.com/users')
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
              <title>All Places to Visit | Kaim Trip</title>
              <meta name="description" content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!" />
            </Helmet>
            <PageHeader title="All Places" description="All Places" imageLink = {"/img/banner/bradcam2.png"}/>
            {!this.state.isLoading ? <Places data ={this.state.data}/> : loadingDiv }
        </div>
    );
  }
}

export default AllPages;
