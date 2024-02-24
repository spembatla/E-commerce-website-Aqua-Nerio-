import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="pt-60 pb-30">
          <div className="row">
            <div className="col-lg-3 col-md-6 mt-4">
              <div className="mb-4">
                <a href="../home">
                  <img
                    src="https://aquanerio.com/assetsweb/images/logo1.png"
                    alt="logo"
                    className="logo"
                  />
                </a>
                <p className="about">
                  We offer our clients with high quality Commercial Water
                  Equipment Industry R.O System.
                </p>
                <span>
                  <i className="fa fa-globe">: </i>
                  <a href="http://aquanerio.com" target="_blank">
                    http://aquanerio.com
                  </a>
                </span>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 mb-4 mt-4">
              <div className="title">
                <h5>Useful Links</h5>
              </div>
              <div className="info">
                <ul>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Our Products</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Condition</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 mb-4 mt-4">
              <div className="title">
                <h5>Our Services</h5>
              </div>
              <div className="info">
                <ul>
                  <li>Free Water Test</li>
                  <li>Free Installation</li>
                  <li>Free Demonstration</li>
                  <li>One Year Warranty</li>
                  <li>On Site After Sale Service</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-6 mb-4 mt-4">
              <div className="title">
                <h5>Get In Tocuch</h5>
              </div>
              <div className="address">
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
                      <i className="fa fa-phone"></i>
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
                      <i className="fa fa-envelope-o"></i>
                    </div>
                    <div className="add">
                      <p>info@aquanerio.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last pt-15 pb-15 text-center">
        <p>
          © 2021 [Aqua Nerio] All Rights Reserved. Designed &amp; Developement
          by
          <span>
            <a href="https://webvisionsoftech.com/" target="_blank">
              Webvision Softech Infotech Pvt. Ltd.
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};
