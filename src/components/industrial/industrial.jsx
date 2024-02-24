import React from "react";
import { Link } from "react-router-dom";

export const Industrial = () => {
  return (
    <div>
      <section className="page-banner ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <h3>| Industrial RO plant</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 mar">
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
            <div className="col-lg-3 col-md-6 col-sm-6 mar">
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
            <div className="col-lg-3 col-md-6 col-sm-6 mar">
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
            <div className="col-lg-3 col-md-6 col-sm-6 mar">
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
            <div className="col-lg-3 col-md-6 col-sm-6 mar">
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
            <div className="col-lg-3 col-md-6 col-sm-6 mar">
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
          </div>
        </div>
      </section>
    </div>
  );
};
