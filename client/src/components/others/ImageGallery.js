import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    const images  = this.props.videoLink;
    let dataMarkup =
    images && images && images.length > 0 ? (
      images.map((image,index) => {
        return (
            <div className="col-md-4">
                <div onClick={() => this.setState({ isOpen: true,photoIndex:index })} className="single-gallery-image" style={{background: `url(${image})`}} />
            </div>
        );
      })
    ) : (
      <div>
      No Places to Visit.Please Check Later
      </div>
    );
    return (
      <fragment>
        <div className="row gallery-item">
           {dataMarkup}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            keyRepeatLimit={10}
            animationOnKeyInput={true}
            keyRepeatKeyupBonus={10}
            imageCaption={"Place Image"}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </fragment>
    );
  }
}