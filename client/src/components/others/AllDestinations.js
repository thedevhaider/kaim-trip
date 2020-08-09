import React, { Component } from "react";

class AllDestinations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }
  render() {
    var { data } = this.state;
    let dataMarkup =
      data && data.length > 0 ? (
        data.map((not) => {
          return (
            <article className="blog_item">
              <div className="blog_item_img">
                <img
                  className="card-img rounded-0"
                  src="img/blog/single_blog_1.png"
                  alt=""
                />
                <a href={`/destination/${not.name.toLowerCase().replace(/\s/g, "-")}`} className="blog_item_date">
                  <h3>{not.id}</h3>
                  <p>Places</p>
                </a>
              </div>
              <div className="blog_details">
                <a className="d-inline-block" href={`/destination/${not.name.toLowerCase().replace(/\s/g, "-")}`}>
                  <h2>{not.name}</h2>
                </a>
                <p>
                  {not.username}
                </p>
              </div>
            </article>
          );
        })
      ) : (
        <div>You have no data yet</div>
      );
    return (
      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                {dataMarkup}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AllDestinations;
