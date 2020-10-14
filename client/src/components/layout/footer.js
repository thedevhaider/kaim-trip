import React, { Component } from "react";
import {getDestinations} from '../../utils/data';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinationsData:null
    };
  }
    componentDidMount() {
       getDestinations(0,6)
      .then((responseJson) => {
        this.setState({ destinationsData : responseJson,isLoadingDestination:false })
      })
      .catch((error) => {
        console.error(error);
      });
    }
  render() {
    var { destinationsData } = this.state;
    let popularDestinations =
      destinationsData && destinationsData.length > 0 ? (
        destinationsData.map((not) => {
          return (
            <fragment>
              <li><a href="/">{not.name}</a></li>
            </fragment>
          );
        })
      ) : (
        <div>You have no data yet</div>
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
                        <img src="/img/footer_logo.png" alt="" />
                      </a>
                    </div>
                    <p>5th flora, 700/D kings road, green <br /> lane New York-1782 <br />
                      <a target="_blank" rel="noopener noreferrer"  href="tel:+919569448252">(+91) 956-9448-252</a> <br />
                      <a target="_blank" rel="noopener noreferrer"  href="mailto:support@kaimtrip.com">support@kaimtrip.com</a>
                    </p>
                    <div className="socail_links">
                      <ul>
                        <li>
                        <a rel="noopener noreferrer" target="_blank"  href="https://www.facebook.com/kaimtrip">
                            <i className="ti-facebook" />
                          </a>
                        </li>
                        <li>
                        <a  target="_blank" rel="noopener noreferrer"  href="https://twitter.com/kaimtrip">
                            <i className="ti-twitter-alt" />
                          </a>
                        </li>
                        <li>
                        <a  rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/kaimtrip/">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                        <a  rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCmzoCYSWBP_wm4QbT9sURkQ">
                            <i className="fa fa-youtube-play" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-6 col-lg-2">
                  <div className="footer_widget">
                    <h3 className="footer_title">
                      Company
                    </h3>
                    <ul className="links">
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/contact"> Contact Us</a></li>
                      <li><a href="/destinations"> Destinations</a></li>
                      <li><a href="/places"> Places</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="footer_widget">
                    <h3 className="footer_title">
                      Popular Destinations
                    </h3>
                    <ul className="links double_links">
                       {popularDestinations}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="footer_widget">
                    <h3 className="footer_title">
                      Image Gallery
                    </h3>
                    <div className="instagram_feed">
                      <div className="single_insta">
                        <a href="/">
                          <img src="/img/instagram/1.png" alt="" />
                        </a>
                      </div>
                    </div>
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
