import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.videoLink,
      photoIndex: 0,
      isOpen: false,
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    var { data } = this.state;
    if (data.length <= 2) {
      data.push(data[0]);
    }
    const { photoIndex, isOpen } = this.state;
    let dataMarkup =
      data && data.length > 0 ? (
        data.map((not, index) => {
          return (
            <div className="col-md-18">
              <div
                onClick={() =>
                  this.setState({ isOpen: true, photoIndex: index })
                }
                className="single-gallery-image"
                style={{
                  background: `url(${not})`,
                  width: "330px",
                  cursor: "pointer",
                }}
              />
            </div>
          );
        })
      ) : (
        <div>No Places to Visit.Please Check Later</div>
      );
    const settings = {
      infinite: true,
      slidesToShow: this.state.width > 1000 ? 3 : 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: this.state.width > 1000 ? 3000 : 1200,
    };
    return (
      <div>
        <Slider {...settings}>{dataMarkup}</Slider>
        {isOpen && (
          <Lightbox
            mainSrc={data[photoIndex]}
            nextSrc={data[(photoIndex + 1) % data.length]}
            prevSrc={data[(photoIndex + data.length - 1) % data.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            keyRepeatLimit={10}
            animationOnKeyInput={true}
            keyRepeatKeyupBonus={10}
            imageCaption={`${this.props.name} Image Gallery`}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + data.length - 1) % data.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % data.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default ImageGallery;
