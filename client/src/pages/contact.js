import React, { Component } from "react";
import {contactForm} from "../utils/data";
import PageHeader from '../components/others/PageHeader';

class Contact extends Component {
    state = {
        message: "",
        name: "",
        subject: "",
        email:"",
        contactNumber: ""
      };
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit = event => {
        const { name, email, message,subject,contactNumber } = this.state;
        event.preventDefault();
        const user = { name, email, message,subject,contactNumber };
        contactForm(user)
        .then((data)=>{
          alert("Contact form Submmited");
        })
        .catch((err)=>{
          alert("Error,Please try Again Later!!");
        })
      };
  render() {
    return (
        <div>
        <PageHeader title="Contact Us" description="Pixel perfect design with awesome contents" imageLink = {"/img/banner/bradcam4.png"}/>
        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="contact-title">Get in Touch</h2>
              </div>
              <div className="col-lg-8">
                <form onSubmit={this.handleSubmit} className="form-contact contact_form">
                  <div className="row">
                     <div className="col-sm-6">
                      <div className="form-group">
                        <input className="form-control valid" name="name" id="name" type="text"
                        required onChange={this.handleChange} placeholder="Enter your name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                        <input className="form-control valid" name="phoneno" id="number" type="number"
                        required onChange={this.handleChange} placeholder="Enter your Contact Number" />
                        </div>
                     </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input className="form-control valid" name="email" id="email" type="email"
                        required onChange={this.handleChange} placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input className="form-control" name="subject" id="subject" type="text"
                        required onChange={this.handleChange} placeholder="Enter Subject" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea className="form-control w-100" name="message" id="message" cols={30} rows={9}
                        required onChange={this.handleChange} placeholder=" Enter Message" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-home" /></span>
                  <div className="media-body">
                    <h3>Buttonwood, California.</h3>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-tablet" /></span>
                  <div className="media-body">
                      <a target="_blank" rel="noopener noreferrer"  href="tel:+919569448252">(+91) 956-9448-252</a>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="media contact-info">
                  <span className="contact-info__icon"><i className="ti-email" /></span>
                  <div className="media-body">
                    <h3>
                       <a target="_blank" rel="noopener noreferrer"  href="mailto:support@kaimtrip.com">support@kaimtrip.com</a>
                    </h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
