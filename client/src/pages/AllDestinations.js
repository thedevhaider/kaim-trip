import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import PageHeader from "../components/others/PageHeader";
import { getDestinations } from "../utils/data";
import InfinitScroll from "react-infinite-scroll-component";

class AllDestinations extends Component {
  constructor(props) {
    super(props);
    // Set Default state
    this.state = {
      destinationsData: [],
      isLoadingDestination: true,
      skip: 0,
      limit: 10,
      hasMore: true,
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.getNextDestinations = this.getNextDestinations.bind(this);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentDidMount() {
    // Get Initial Destinations.
    getDestinations(this.state.skip, this.state.limit)
      .then((responseJson) => {
        this.setState({
          destinationsData: responseJson,
          isLoadingDestination: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  // Update the destinations.
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.destinationsData.length !== this.state.destinationsData.length
    ) {
      this.setState({
        destinationsData: this.state.destinationsData,
      });
    }
  }
  // Get Next Destinations while Scrolling.
  getNextDestinations() {
    this.setState({ skip: this.state.skip + this.state.limit });
    getDestinations(this.state.skip, this.state.limit)
      .then((responseJson) => {
        if (responseJson.length === 0) this.setState({ hasMore: false });
        this.setState({
          destinationsData: this.state.destinationsData.concat(responseJson),
          isLoadingDestination: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    var { destinationsData } = this.state;
    let destinationsDataMarkup =
      destinationsData && destinationsData.length > 0 ? (
        destinationsData.map((not) => {
          return (
            <article
              className="blog_item"
              style={this.state.width > 1000 ? { width: "750px" } : {}}
            >
              <div className="blog_item_img">
                <a
                  href={`/destination/${not.name
                    .toLowerCase()
                    .replace(/\s/g, "-")}-${not.tagline
                    .toLowerCase()
                    .replace(/\s/g, "-")}/${not._id
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  <img
                    className="card-img rounded-0"
                    src={not.banner}
                    alt={not.name}
                    style={
                      this.state.width > 1000
                        ? { width: "750px", height: "375px" }
                        : {}
                    }
                  />
                </a>
                {not.places.length !== 0 ? (
                  <a
                    href={`/destination/${not.name
                      .toLowerCase()
                      .replace(/\s/g, "-")}-${not.tagline
                      .toLowerCase()
                      .replace(/\s/g, "-")}/${not._id
                      .toLowerCase()
                      .replace(/\s/g, "-")}#places`}
                    className="blog_item_date"
                  >
                    <h3>{not.places.length}</h3>
                    {not.places.length > 1 ? <p>Places</p> : <p>Place</p>}
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div className="blog_details">
                <a
                  href={`/destination/${not.name
                    .toLowerCase()
                    .replace(/\s/g, "-")}-${not.tagline
                    .toLowerCase()
                    .replace(/\s/g, "-")}/${not._id
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  <h2>
                    {not.name.charAt(0).toUpperCase() + not.name.slice(1)} (
                    {not.state})
                  </h2>
                </a>
                <p>{not.tagline.replace(/^(.{120}[^\s]*).*/, "$1")}....</p>
              </div>
            </article>
          );
        })
      ) : (
        <div>No Destinations to Visit.Please Check Later</div>
      );
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
      <div>
        <Helmet>
          <title>All Destinations to Visit | Kaim Trip</title>
          <meta
            name="description"
            content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!"
          />
        </Helmet>
        {
          // Set the Page Header
        }
        <PageHeader
          name="All Destinations"
          tagline="All Destinations"
          banner={"/img/banner/bradcam2.png"}
        />
        {!this.state.isLoadingDestination ? (
          <InfinitScroll
            dataLength={this.state.destinationsData.length}
            next={this.getNextDestinations}
            hasMore={this.state.hasMore}
            loader={loadingDiv}
          >
            <section className="blog_area section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 mb-5 mb-lg-0">
                    <div className="blog_left_sidebar">
                      {destinationsDataMarkup}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </InfinitScroll>
        ) : (
          loadingDiv
        )}
      </div>
    );
  }
}

export default AllDestinations;
