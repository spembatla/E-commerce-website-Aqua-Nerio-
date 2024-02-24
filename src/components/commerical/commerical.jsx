import React from "react";
import { Link } from "react-router-dom";

export const Commercial = () => {
  return (
    <div>
      <section className="page-banner ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <h3>| Commercial RO plant</h3>
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
                  src="https://aquanerio.com/productImage/19/p-1.png"
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
            <div className="col-lg-3 col-md-6 col-sm-6 mar">
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
            <div className="col-lg-3 col-md-6 col-sm-6 mar">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/21/p-3.png"
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
            <div className="col-lg-3 col-md-6 col-sm-6 mar">
              <div className="card">
                <img
                  src="https://aquanerio.com/productImage/22/p-4.png"
                  className="wid"
                  alt=""
                />
                <div className="card-body">
                  <h5>Nerio full ss</h5>
                  <p className="price">₹ 146500</p>
                  <p className="card-text">full capacity of purification</p>
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
                  src="https://aquanerio.com/productImage/23/p-5.png"
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
          </div>
        </div>
      </section>
    </div>
  );
};
