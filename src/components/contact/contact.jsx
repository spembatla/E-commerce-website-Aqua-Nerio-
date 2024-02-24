import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div>
      <section className="page-banner ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <h3>| Contact us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center pb-25">
                <h2>Get in Touch</h2>
                <div className="divider"></div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-12"></div>
          </div>
          <div className="row mt-25">
            <div className="col-lg-7">
              <div className="contact-form pt-45">
                <h5>Leave Reply</h5>
                <form noValidate="true">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-form">
                        <label>
                          First Name
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          name="fname"
                          type="text"
                          data-error="required"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form">
                        <label>
                          Last Name
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          name="lname"
                          type="text"
                          data-error="required"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form">
                        <label>
                          Mobile Number
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          name="mobile"
                          id="mobile"
                          type="number"
                          data-error="required"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form">
                        <label>
                          Email Address
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          data-error="required"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-form">
                        <label>Write a Message :</label>
                        <textarea name="message" type="textarea"></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-form">
                        <button type="submit" class="disabled">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-form pt-45">
                <h5 className="mb-4">Contact Information </h5>
                <ul>
                  <li>
                    <div className="icon map-i">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="add">
                      <p>
                        Bldg No. 14/ Shop No. 29, Agarwal Liftestyle Bldg,
                        Avenue B1, Global City, Virar West - 401 303.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-envelope-o"></i>
                    </div>
                    <div className="add">
                      <p>info@aquanerio.com</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-mobile"></i>
                    </div>
                    <div className="add">
                      <p>+91 9702113771 &nbsp; | &nbsp; +91 9167715371</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-whatsapp"></i>
                    </div>
                    <div className="add">
                      <p>+91 8484814515 </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="add">
                      <p>0250-6059227 </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="social-media pt-25">
                <ul className="header-social-profile ">
                  <li>
                    <a
                      href="http://www.facebook.com/aqua.nerio.96"
                      target="_blank"
                    >
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/aqua_nerio" target="_blank">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.10669779405242!2d72.80024874331146!3d19.468188417413803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0xb473b71663ed0410!2sAquanerio!5e0!3m2!1sen!2sin!4v1466666553382"
                  width="100%"
                  height="450"
                  frameborder="0"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
