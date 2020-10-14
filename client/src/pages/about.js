import React, { Component } from "react";
import { Helmet } from "react-helmet";
import VideoTestimonial from "../components/index/VideoTestimonial";
import PageHeader from "../components/others/PageHeader";

class About extends Component {
  render() {
    var description = `KaimTrip offers you a very useful platform to plan your most
    memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!`;
    return (
      <div>
        <Helmet>
          <title>About Us | Kaim Trip</title>
          <meta
            name="description"
            content="KaimTrip offers you a very useful platform to plan your most memorable customized trips to feel the nature at its best and to spend your precious time with your loved ones!!!"
          />
        </Helmet>
        <PageHeader
          name="About Us"
          tagline={description}
          banner={"/img/banner/bradcam3.png"}
        />
        <div className="about_story">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="story_heading">
                  <h3>Our Story</h3>
                </div>
                <div className="row">
                  <div className="col-lg-11 offset-lg-1">
                    <div className="story_info">
                      <div className="row">
                        <div className="col-lg-9">
                          <p>
                            Consulting represents success at realizing the
                            company is going in the wrong direction. The only
                            time the company fails is when it is not possible to
                            do a turnaround anymore. We help companies pivot
                            into more profitable directions where they can
                            expand and grow. It is inevitable that companies
                            will end up making a few mistakes; we help them
                            correct these mistakes.
                          </p>
                          <p>
                            Consulting represents success at realizing the
                            company is going in the wrong direction. The only
                            time the company fails is when it is not possible to
                            do a turnaround anymore. We help companies pivot
                            into more profitable directions where they can
                            expand and grow. It is inevitable that companies
                            will end up making a few mistakes; we help them
                            correct these mistakes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="story_thumb">
                      <div className="row">
                        <div className="col-lg-5 col-md-6">
                          <div className="thumb padd_1">
                            <img src="img/about/1.png" alt="" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="thumb">
                            <img src="img/about/2.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="whole-wrap">
                      <div className="container box_1170">
                        <div className="section-top-border">
                          <div className="row gallery-item">
                            <div className="col-md-4">
                                <div
                                  className="single-gallery-image"
                                  style={{
                                    background: "url(img/elements/g1.jpg)",
                                  }}
                                />
                            </div>
                            <div className="col-md-4">
                                <div
                                  className="single-gallery-image"
                                  style={{
                                    background: "url(img/elements/g2.jpg)",
                                  }}
                                />
                            </div>
                            <div className="col-md-4">
                                <div
                                  className="single-gallery-image"
                                  style={{
                                    background: "url(img/elements/g3.jpg)",
                                  }}
                                />
                            </div>
                            <div className="col-md-6">
                                <div
                                  className="single-gallery-image"
                                  style={{
                                    background: "url(img/elements/g4.jpg)",
                                  }}
                                />
                            </div>
                            <div className="col-md-6">
                                <div
                                  className="single-gallery-image"
                                  style={{
                                    background: "url(img/elements/g5.jpg)",
                                  }}
                                />
                            </div>
                            <div className="col-md-4">
                                <div
                                  className="single-gallery-image"
                                  style={{
                                    background: "url(img/elements/g6.jpg)",
                                  }}
                                />
                            </div>
                            <div className="col-md-4">
                                <div
                                  className="single-gallery-image"
                                  style={{
                                    background: "url(img/elements/g7.jpg)",
                                  }}
                                />
                            </div>
                            <div className="col-md-4">
                                <div
                                  className="single-gallery-image"
                                  style={{
                                    background: "url(img/elements/g8.jpg)",
                                  }}
                                />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <VideoTestimonial />
      </div>
    );
  }
}

export default About;
