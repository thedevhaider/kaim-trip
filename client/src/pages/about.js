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
                <div className="row">
                  <div className="col-lg-11 offset-lg-1">
                    <div className="story_info">
                      <div className="row">
                        <div className="col-lg-9">
                        <div className="story_heading">
                          <h3>WELCOME HOME FELLOW TRAVELERS!</h3>
                        </div>
                          <p>
                          Have you ever said to yourself one of the following: <br /> <br />
                          “How do I find the money to travel? It seems too expensive for me.” <br />
                          “Where do I find the best travel deals?” <br />
                          “How do I save money on flights, accommodation, and other big expenses?” <br />
                          “How do I plan my trip?” <br />
                          “How do I stay safe and healthy?” <br />
                          “How do I maximize my time?” <br />
                          “I want to travel more but I don’t know the first step.” <br />
                          </p>
                          <p>
                          You are not alone. Over the past years, We’ve helped lots of people answer those questions and travel 
                          more for less with time tested and proven tips and advice. By using this website, you can spend less 
                          time searching the Internet and being overwhelmed with information and more time doing the one thing 
                          you want to do: travel more.
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
