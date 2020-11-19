import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

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
      data : this.props.videoLink,
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    var {data} = this.state;
    if(data.length<=2)
    {
      data.push(data[0])
    }
    const { photoIndex, isOpen } = this.state;
    let dataMarkup =
    data && data.length > 0 ? (
      data.map((not) => {
        return (           
        <div className="col-md-12">
            <div onClick={() => this.setState({ isOpen: true })} className="single-gallery-image" style={{background: `url(${not})`}} />
        </div>
        );
      })
    ) : (
      <div>
      No Places to Visit.Please Check Later
      </div>
    );
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000
    };
    return (
      <div>
        <Slider {...settings}>
          {dataMarkup}
        </Slider>
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


export default (ImageGallery);
