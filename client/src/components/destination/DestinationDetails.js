import React, { Component } from "react";

class DestinationDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : {
        name:'Mohit',
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
          },
          {
            description:'Single Day',
            image:'https://images.unsplash.com/photo-1427435150519-42d9bcd0aa81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
          },
          {
            description:'Single Day',
            image:'https://images.unsplash.com/photo-1427435150519-42d9bcd0aa81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
          }
        ]
      }
    };
  }
  componentDidMount() {
     // this.renderMyData();
  }
  renderMyData(){
      fetch('https://picsum.photos/v2/list?limit=10')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({ data : responseJson })
          })
          .catch((error) => {
            console.error(error);
          });
  }
  render() {
    var {data} = this.state;
      let daysMarkup =
      data && data.dateData && data.dateData.length > 0 ? (
        data.dateData.map((day,index) => {
          if(index%2 === 0)
          {
            return (
              <div className="single_destination">
              <div className="section-top-border">
                <h3 className="mb-30">{`Day ${index+1}`}</h3>
                <div className="row">
                  <div className="col-md-3">
                    <img src={day.image} alt="" className="img-fluid" />
                  </div>
                  <div className="col-md-9 mt-sm-20">
                    <p>
                      {day.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            );
          }
          else{
            return (
              <div className="single_destination">
              <div className="section-top-border text-right">
                <h3 className="mb-30">{`Day ${index+1}`}</h3>
                <div className="row">
                  <div className="col-md-9 mt-sm-20">
                    <p>
                      {day.description}
                    </p>
                  </div>
                  <div className="col-md-3">
                    <img src={day.image} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            );
          }
        })
      ) : (
        <div>
          You have no data yet
        </div>
      );
    return (
      <div className="destination_details_info">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-9">
              <div className="destination_info">
                <h3>Description</h3>
                <p>
                  {this.state.data.description}
                </p>
                {daysMarkup}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationDetails;
