import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
    
    
  };

  var setting = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        setting: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        setting: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],

  };

  return (
    <div>
      <section>
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://www.aquanerio.com/assetsweb/images/slider/bg-1.jpg"
                alt="bg-1"
                class="backgroundImage"
              />
              <div class="carousel-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="slider-content pt-30 text-center">
                        <h2
                          data-animation="fadeInUp"
                          data-delay="1s"
                          className="text"
                        >
                          Always want safe and good water for healthy life
                        </h2>
                        <a
                          data-animation="fadeInUp"
                          data-delay="2s"
                          className="up"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://www.aquanerio.com/assetsweb/images/slider/bg-3.jpg"
                alt="bg-3"
                class="backgroundImage"
              />
              <div class="carousel-caption">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="slider-content pt-30 text-center">
                        <h2
                          data-animation="fadeInUp"
                          data-delay="1s"
                          className="text"
                        >
                          Always want safe and good water for healthy life
                        </h2>
                        <a
                          data-animation="fadeInUp"
                          data-delay="2s"
                          className="up"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
      <div class="container">
        <div class="row">
          <div class="col-sm-12"></div>
        </div>
      </div>
      <section className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="abouts">
                <h3>
                  <span>WELCOME TO</span>
                  Aqua Nerio
                </h3>
                <p className="about-content">
                  We offer our clients with high quality Commercial Water
                  Equipment Industry R.O System. These are provided to the
                  clients in customized sizes and specifications to meet the
                  varied requirements of the clients. The specifications and
                  features are suitable for industrial and commercial uses.
                </p>
                <a href="../about">
                  <Link to={"/about"} />
                  <button type="button" className="read-more mb-3">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-pad bg-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center pb-25">
                <h2>OUR PRODUCTS</h2>
                <div className="divider"></div>
                <p>
                  We offer our clients with high quality Commercial Water
                  Equipment Industry R.O System.
                </p>
              </div>
            </div>
          </div>
          <div className="row pad-sm">
            <div className="col-lg-6">
              <div className="mt-10 abouts">
                <a href="../domestric-ro">
                  <Link to={"/domestric-ro"} />
                  <h3>
                    <span>Domestric</span>
                    RO
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-right read">
              <a href="../domestric-ro">
                <Link to={"/domestric-ro"} />
                <button type="button" className="read-more">
                  View More
                </button>
              </a>
            </div>
          </div>
          <div className="row">
            <Slider {...settings}>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/1/p-1.jpg"
                  className="image-wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio Cryst (Black)</h5>
                  <p className="card-text">Nerio Cryst (Black)</p>
                  <p className="price">₹ 19490</p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/2/p-2.jpg"
                  className="image-wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio misty (Black)</h5>
                  <p className="card-text">Nerio misty (Black)</p>
                  <p className="price">₹ 18990</p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/3/p-3.jpg"
                  className="image-wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio nxt   (Blue )</h5>
                  <p className="card-text">Nerio nxt (Bluek)</p>
                  <p className="price">₹ 19490</p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/4/p-4.jpg"
                  className="image-wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio nxt (Black)</h5>
                  <p className="card-text">Nerio nxt (Black)</p>
                  <p className="price">₹ 19490</p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/5/p-5.jpg"
                  className="image-wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio Cryst (Blue)</h5>
                  <p className="card-text">Nerio Cryst (Blue)</p>
                  <p className="price">₹ 19490</p>
                  <a href="../login" className="btn btn-primary"><Link to={'/login'}/>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/6/p-6.jpg"
                  className="image-wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio misty (White)</h5>
                  <p className="card-text">Nerio misty (White)</p>
                  <p className="price">₹ 14990</p>
                  <a href="../login" className="btn btn-primary"><Link to={'/login'}/>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/7/p-7.png"
                  className="image-wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio rio</h5>
                  <p className="card-text">Ro + uv + uf + TDS control</p>
                  <p className="price">₹ 13990</p>
                  <a href="../login" className="btn btn-primary"><Link to={'/login'}/>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/8/p-8.png"
                  className="image-wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio perl</h5>
                  <p className="card-text">Ro + UV + UF</p>
                  <p className="price">₹ 15890</p>
                  <a href="../login" className="btn btn-primary"><Link to={'/login'}/>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/9/p-9.png"
                  className="image-wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio Swan</h5>
                  <p className="card-text">Ro</p>
                  <p className="price">₹ 10500</p>
                  <a href="../login" className="btn btn-primary"><Link to={'/login'}/>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/10/p-10.png"
                  className="image-wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio unique +</h5>
                  <p className="card-text">Nerio unique +</p>
                  <p className="price">₹ 17490</p>
                  <a href="../login" className="btn btn-primary"><Link to={'/login'}/>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/11/p-11.png"
                  className="image-wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio Eco</h5>
                  <p className="card-text">Nerio Eco</p>
                  <p className="price">₹ 12990</p>
                  <a href="../login" className="btn btn-primary"><Link to={'/login'}/>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/12/p-12.png"
                  className="image-wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio pride</h5>
                  <p className="card-text">
                    RO + UV + UF + TDS control 
                  </p>
                  <p className="price">₹ 17990</p>
                  <a href="../login" className="btn btn-primary"><Link to={'/login'}/>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            </Slider>
          </div>
          <div className="row pad-sm">
            <div className="col-lg-6">
              <div className="mt-10 abouts">
                <a href="../industrial-ro">
                  <Link to={"/industrial-ro"} />
                  <h3>
                    <span>Industrial</span>
                    RO plant
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-right read">
              <a href="../industrial-ro">
                <button type="button" className="read-more">
                  <Link to={"/industrial-ro"} />
                  View More
                </button>
              </a>
            </div>
          </div>
          <div className="row">
            <Slider {...settings}>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/13/p-1.png"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio (ro)-01</h5>
                  <p className="price">₹ 23599</p>
                  <p className="card-text">purification capacity upto 25 lph</p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/14/p-2.png"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio (ro)-02</h5>
                  <p className="price">₹ 29500</p>
                  <p className="card-text">purification capacity upto 35 lph</p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/15/p-3.png"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio (ro)-03</h5>
                  <p className="price">₹ 39490</p>
                  <p className="card-text">purification capacity upto 50 lph</p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/16/p-4.png"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio (ro)-04</h5>
                  <p className="price">₹ 46500</p>
                  <p className="card-text">purification capacity upto 70 lph</p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/17/p-5.png"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio (ro)-05</h5>
                  <p className="price">₹ 53990</p>
                  <p className="card-text">
                    purification capacity upto 100 lph
                  </p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/18/p-6.png"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio (ro)-04</h5>
                  <p className="price">₹ 165000</p>
                  <p className="card-text">
                    purification capacity upto 250 lph
                  </p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            </Slider>
          </div>
          <div className="row pad-sm">
            <div className="col-lg-6">
              <div className="mt-10 abouts">
                <a href="../commercial-ro">
                  <Link to={"/commercial-ro"} />
                  <h3>
                    <span>Commercial</span>
                    RO plant
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-right read">
              <a href="../commercial-ro">
                <button type="button" className="read-more">
                  <Link to={"/commercial-ro"} />
                  View More
                </button>
              </a>
            </div>
          </div>
          <div className="row">
            <Slider {...settings}>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/19/p-1.png"
                  className="wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio -500 lph</h5>
                  <p className="price">₹ 123599</p>
                  <p className="card-text">
                    purification capacity upto 500 lph
                  </p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/20/p-2.png"
                  className="wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio -1000 lph</h5>
                  <p className="price">₹ 129500</p>
                  <p className="card-text">
                    purification capacity upto 1000 lph
                  </p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/21/p-3.png"
                  className="wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio -2000 lph</h5>
                  <p className="price">₹ 139490</p>
                  <p className="card-text">
                    purification capacity upto 2000 lph
                  </p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/22/p-4.png"
                  className="wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio full ss</h5>
                  <p className="price">₹ 146500</p>
                  <p className="card-text">full capacity of  purification 5000 Lph</p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/23/p-5.png"
                  className="wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Heavy Capacity Ro Plant</h5>
                  <p className="price">₹ 156500</p>
                  <p className="card-text">a heavy purification capacity</p>
                  <a href="../login" className="btn btn-primary">
                    <Link to={"/login"} />
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="sec-pad ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center pb-25">
                <h2>OUR Services</h2>
                <div className="divider"></div>
                <p>We Provide best services for our customers.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="single-services-1 mt-45 line-r ">
                <div className="services-icon">
                  <img
                    src="https://aquanerio.com/assetsweb/images/choose-us/icon-1.png"
                    alt="icon"
                  />
                </div>
                <div className="services-cont pl-70">
                  <h4>Free Water Test</h4>
                  <p>
                    Water testing is a broad description for various procedures
                    used to analyze water quality. Millions of water quality
                    tests are carried out daily to fulfill regulatory
                    requirements and to maintain safety.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-services-1 mt-45">
                <div className="services-icon">
                  <img
                    src="https://aquanerio.com/assetsweb/images/choose-us/icon-2.png"
                    alt="icon"
                  />
                </div>
                <div className="services-cont pl-70">
                  <h4>Free Installation</h4>
                  <p>
                    Offering Installation free AQUA NERIO WATER PURIFIER
                    DOMESTIC COMMERCIAL, Ro Water Purifier.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="line-b d-none d-lg-block"></div>
            </div>
            <div className="col-lg-6">
              <div className="single-services  line-r ">
                <div className="services-icon pt-45">
                  <img
                    src="https://aquanerio.com/assetsweb/images/choose-us/icon-3.png"
                    alt="icon"
                  />
                </div>
                <div className="services-cont pl-70">
                  <h4>Free Demonstration</h4>
                  <p>
                    Book Free Water Purifier Home Demo now &amp; Find the best
                    suitable RO Water Purifier as per your family's need and
                    water quality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-services  ">
                <div className="services-icon">
                  <img
                    src="https://aquanerio.com/assetsweb/images/choose-us/icon-4.png"
                    alt="icon"
                  />
                </div>
                <div className="services-cont pl-70">
                  <h4>One Year Warranty</h4>
                  <p>
                    All Parts One Year Replacement Warranty Not Include Cabinet.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="line-b d-none d-lg-block"></div>
            </div>
            <div className="col-lg-6">
              <div className="single-services  line-r ">
                <div className="services-icon">
                  <img
                    src="https://aquanerio.com/assetsweb/images/choose-us/icon-5.png"
                    alt="icon"
                  />
                </div>
                <div className="services-cont pl-70">
                  <h4>On Site After Sale Service</h4>
                  <p>
                    We Provide All Kind Of RO Repair Service.Doorstep
                    Service.Get Your RO Water Purifier Serviced by Our
                    Experienced Technician.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-pad bg-gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <img
                  src="https://aquanerio.com/assetsweb/images/client/c.png"
                  alt="icon"
                />
                <h2>Our Exhort Happy clients say!</h2>
                <div class="divider"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <Slider {...setting}>
            <div className="col-lg-6 col-sm-6">
              <div className="client">
                <img
                  src="https://aquanerio.com/assetsweb/images/client/a1.jpg"
                  alt="client"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="client">
                <img
                  src="https://aquanerio.com/assetsweb/images/client/a2.jpg"
                  alt="client"
                />
              </div>
            </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};
