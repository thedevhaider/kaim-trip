import React, { Component } from "react";
import { Helmet } from "react-helmet";
import MorePlaces from '../components/others/MorePlaces';
import DestinationDetails from '../components/destination/DestinationDetails';
import PageHeader from '../components/others/PageHeader';

class Destination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{
        name:'Alejandro Escamilla',
        shortdescription:'A Short Description.',
        description:'A long Description.',
        dateData:[
          {
            description:'Single Day',
            image:'https://images.unsplash.com/photo-1427435150519-42d9bcd0aa81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
          },
          {
            description:'Single Day',
            image:'https://images.unsplash.com/photo-1427435150519-42d9bcd0aa81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
          }
        ],
        placesData:[
          {
            name:'Hills',
            price:'4000 Rs.',
            rating:4,
            days:5,
            image:'https://images.unsplash.com/photo-1427435150519-42d9bcd0aa81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
          },
          {
            name:'Ice',
            price:'4000 Rs.',
            rating:4,
            days:5,
            image:'https://images.unsplash.com/photo-1427435150519-42d9bcd0aa81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
          }
        ]
      }
    }
  }
  render() {
    var {data}=this.state;
    return (
        <div>
            <Helmet>
              <title>Visit {this.state.data.name} by Kaim Trip</title>
              <meta name="description" content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!" />
            </Helmet>
            <PageHeader title={this.state.data.name} description={this.state.data.shortdescription} imageLink = {"/img/banner/bradcam2.png"}/>
            <DestinationDetails data={data}/>
            <MorePlaces  data ={data}/>
        </div>
    );
  }
}

export default Destination;