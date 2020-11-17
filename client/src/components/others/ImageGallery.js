import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import ImageGallery1 from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.videoLink,
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    var { data } = this.state;
    const { photoIndex, isOpen } = this.state;
    let dataMarkup =
      data && data.length > 0 ? (
        data.map((not) => {
          return (
            <div className="col-md-4">
              <div
                onClick={() => this.setState({ isOpen: true })}
                className="single-gallery-image"
                style={{ background: `url(${not})` }}
              />
            </div>
          );
        })
      ) : (
        <div>No Places to Visit.Please Check Later</div>
      );
    const settings = {
      infinite: true,
      lazyLoad: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <ImageGallery1 items={images} />;
        {isOpen && (
          <Lightbox
            mainSrc={data[photoIndex]}
            nextSrc={data[(photoIndex + 1) % data.length]}
            prevSrc={data[(photoIndex + data.length - 1) % data.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            keyRepeatLimit={10}
            animationOnKeyInput={true}
            keyRepeatKeyupBonus={10}
            imageCaption={"Place Image"}
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
