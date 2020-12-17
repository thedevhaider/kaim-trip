import React, { Component } from "react";
import { getDestinations, getPlaces } from "../../utils/data";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinationsData: null,
      placesData: null,
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
        this.setState({
          placesData: responseJson,
          isLoadingDestination: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    var { destinationsData, placesData } = this.state;
    let popularDestinations =
      destinationsData && destinationsData.length > 0 ? (
        destinationsData.map((not) => {
          return (
            <fragment>
              <li>
                <a
                  href={`/destination/${not.name
                    .toLowerCase()
                    .replace(/\s/g, "-")}-${not.tagline
                    .toLowerCase()
                    .replace(/\s/g, "-")}/${not._id
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  {not.name.replace(/\w\S*/g, function (txt) {
                    return (
                      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                    );
                  })}
                </a>
              </li>
            </fragment>
          );
        })
      ) : (
        <div></div>
      );
    let popularPlaces =
      placesData && placesData.length > 0 ? (
        placesData.map((not) => {
          return (
            <fragment>
              <li>
                <a
                  href={`/place/${not.name
                    .toLowerCase()
                    .replace(/\s/g, "-")}-${not.tagline
                    .toLowerCase()
                    .replace(/\s/g, "-")}/${not._id
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  {not.name.replace(/\w\S*/g, function (txt) {
                    return (
                      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                    );
                  })}
                </a>
              </li>
            </fragment>
          );
        })
      ) : (
        <div></div>
      );
    return (
      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6 col-lg-4 ">
                <div className="footer_widget">
                  <div className="footer_logo">
                    <a href="/">
                      <img src="/img/footer_logo.svg" alt="" />
                    </a>
                  </div>
                  <p>
                  T19/804, Motiya Royal City <br /> Chandigarh Ambala Highway <br /> Zirakpur, Chandigarh (India){" "}
                    <br />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="tel:+919569448252"
                    >
                      (+91) 956-9448-252
                    </a>{" "}
                    <br />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="mailto:support@kaimtrip.com"
                    >
                      support@kaimtrip.com
                    </a>
                  </p>
                  <div className="socail_links">
                    <ul>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://www.facebook.com/kaimtrip"
                        >
                          <i className="ti-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://twitter.com/kaimtrip"
                        >
                          <i className="ti-twitter-alt" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://www.instagram.com/kaimtrip/"
                        >
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://www.youtube.com/channel/UCmzoCYSWBP_wm4QbT9sURkQ"
                        >
                          <i className="fa fa-youtube-play" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-lg-2">
                <div className="footer_widget">
                  <h3 className="footer_title">Company</h3>
                  <ul className="links">
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/contact"> Contact Us</a>
                    </li>
                    <li>
                      <a href="/destinations"> Destinations</a>
                    </li>
                    <li>
                      <a href="/places"> Treks</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Popular Destinations</h3>
                  <ul className="links double_links">{popularDestinations}</ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Popular Treks</h3>
                  <ul className="links double_links">{popularPlaces}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
