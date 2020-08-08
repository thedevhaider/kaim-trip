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
                <a href="/" className="blog_item_date">
                  <h3>15</h3>
                  <p>Jan</p>
                </a>
              </div>
              <div className="blog_details">
                <a className="d-inline-block" href="single-blog.html">
                  <h2>Google inks pact for new 35-storey office</h2>
                </a>
                <p>
                  That dominion stars lights dominion divide years for fourth
                  have stars is that he earth it first without heaven in place
                  seed it second morning saying.
                </p>
                <ul className="blog-info-link">
                  <li>
                    <a href="/">
                      <i className="fa fa-user" /> Travel, Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-comments" /> 03 Comments
                    </a>
                  </li>
                </ul>
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
                <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="/" className="page-link" aria-label="Previous">
                        <i className="ti-angle-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="/" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a href="/" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="/" className="page-link" aria-label="Next">
                        <i className="ti-angle-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Destinations;
