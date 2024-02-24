import React from "react";
import "./cart.css";

export const Cart = () => {
  return (
    <div>
      <section className="page-banner ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <h3>| Cart page</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cart">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cart-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="heading">S/N</th>
                      <th className="heading">Action</th>
                      <th className="heading">Product Image</th>
                      <th className="heading">Product Name</th>
                      <th className="heading">Quantity</th>
                      <th className="heading text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={6} className="text-center">No Data Found!</td>
                    </tr>
                    <tr>
                      <td colSpan={6} className="total">
                        <label className="total-price">Total Price</label>
                        <input
                          className="cart-control text-success text-right"
                          type="text"
                          name="totMAt"
                          id="totMAt"
                          value="0"
                          readonly=""
                        ></input>
                      </td>
                    </tr>
                    <tr>
                        <td colSpan={3} className="main-cart text-left">
                            <a href="../home">
                                <button type="button" className="cart-btn">Continue Shopping</button>
                            </a>
                        </td>
                        <td colSpan={3} className="total">
                            
                                <button type="submit" name="submit" className="cart-btn">Place Order</button>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
