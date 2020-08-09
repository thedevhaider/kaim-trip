import React, { Component } from "react";

class Destinations extends Component {
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
                <a href={`/destination/${not.name.toLowerCase().replace(/\s/g, "-")}/#places`} className="blog_item_date">
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
                {// <nav className="blog-pagination justify-content-center d-flex">
                //   <ul className="pagination">
                //     <li className="page-item">
                //       <a href="/" className="page-link" aria-label="Previous">
                //         <i className="ti-angle-left" />
                //       </a>
                //     </li>
                //     <li className="page-item">
                //       <a href="/" className="page-link">
                //         1
                //       </a>
                //     </li>
                //     <li className="page-item active">
                //       <a href="/" className="page-link">
                //         2
                //       </a>
                //     </li>
                //     <li className="page-item">
                //       <a href="/" className="page-link" aria-label="Next">
                //         <i className="ti-angle-right" />
                //       </a>
                //     </li>
                //   </ul>
                // </nav>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Destinations;
