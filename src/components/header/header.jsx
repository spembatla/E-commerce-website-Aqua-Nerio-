import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="header-top  d-lg-block d-none">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-xl-5">
              <div className="phone text-center">
                <p>
                  <i className="fa fa-brands fa-whatsapp"></i>+91 8484814515
                  &nbsp; | &nbsp; +91 9702113771 &nbsp; | &nbsp;
                  <i className="fa fa-light fa-phone"></i>+91 9167715371
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-xl-5">
              <div className="phone text-center">
                <p>
                  <i className="fa fa-thin fa-tag"></i>
                  Offer: Get Free Filter Housing + Free Filter Rs. 950/-
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-xl-2 text-right">
              <div className="offer border-none text-center">
                <ul className="header-authnicate">
                  <li>
                    <a href="../login">
                      <Link to={"/login"} />
                      Login
                    </a>
                  </li>
                  <li>Welcome</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation ">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg sticky-top" data-spy="affix" data-offset-top="197">
                <a className="navbar-brand" href="../home">
                  <Link to={"/home"} />
                  <img
                    src="https://aquanerio.com/assetsweb/images/logo1.png"
                    alt="logo"
                    className="logo"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  toggle="collapse"
                  data-target="#collapsibleNavbar"
                  aria-controls="collapsibleNavbar"
                  aria-expanded="false"
                  aria-label="Toogle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse "
                  id="collapsibleNavbar"
                >
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <a href="../home" className="nav-link">
                        <Link to={"/"} />
                        Home
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="../about" className="nav-link">
                        <Link to={"/about"} />
                        About Us
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        Our Products
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="../domestric">
                              <Link to={"/domestric-ro"} />
                              Domestric RO
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="../industrial">
                              <Link to={'/industrial-ro'}/>
                              Industrial RO
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="../commercial">
                              <Link to={'/commercial-ro'}/>
                              Commercial RO
                            </a>
                          </li>
                        </ul>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="../contact" className="nav-link">
                        <Link to={"/contact"} />
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="cart-search">
                  <ul>
                    <li>
                      <a href="../cart">
                        <Link to={"/cart"} />
                        <i class="fa fa-shopping-basket"></i>
                        <span>0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-heart"></i>
                        <span class="bg-danger">0</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    
  );
};

