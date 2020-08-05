import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-area">
          <div id="sticky-header" className="main-header-area">
            <div className="container-fluid">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2">
                    <div className="logo">
                      <a href="/">
                        <img src="img/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="main-menu  d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a className="active" href="/">
                              home
                            </a>
                          </li>
                          <li>
                            <a href="about">About</a>
                          </li>
                          <li>
                            <a className href="travel_destination">
                              Destination
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              pages <i className="ti-angle-down" />
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="destination_details">
                                  Destinations details
                                </a>
                              </li>
                              <li>
                                <a href="elements">elements</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 d-none d-lg-block">
                    <div className="social_wrap d-flex align-items-center justify-content-end">
                      <div className="number">
                        <p>
                          {" "}
                          <i className="fa fa-phone" /> (+91) 956-9448-252
                        </p>
                      </div>
                      <div className="social_links d-none d-xl-block">
                        <ul>
                          <li>
                            <a  rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/kaimtrip/">
                              {" "}
                              <i className="fa fa-instagram" />{" "}
                            </a>
                          </li>
                          <li>
                            <a  rel="noopener noreferrer" target="_blank" href="https://twitter.com/kaimtrip">
                              {" "}
                              <i className="fa fa-twitter" />{" "}
                            </a>
                          </li>
                          <li>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/kaimtrip">
                              {" "}
                              <i className="fa fa-facebook" />{" "}
                            </a>
                          </li>
                          <li>
                            <a  rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCmzoCYSWBP_wm4QbT9sURkQ">
                              {" "}
                              <i className="fa fa-youtube" />{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
