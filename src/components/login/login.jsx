import React from "react";
import "./login.css";

export const Login = () => {
    return (
        <div>
            <section className="login-part">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-5 col-md-7 col-sm-10">
                            <div className="login-form ">
                                <h3 className="login-title" >Login Your Account</h3>
                                <form>
                                    <div className="single-form">
                                        <label>Email ID</label>
                                        <input type="email" name="email" placeholder="Enter your email..." required/>
                                    </div>
                                    <div className="single-form">
                                        <label>Password</label>
                                        <input type="text" name="password" placeholder="Enter your password..." required/>
                                        <div className="custom-checkbox mt-3">
                                            <input type="checkbox" id="customCheck1" />
                                            <label for="customCheck1">Show password</label>
                                        </div>
                                    </div>
                                    <div className="single-form">
                                        <button type="submit" name="submit">Login Account</button>
                                    </div>
                                </form>
                                <ul className="remember">
                                    <li>
                                        <p>Don't have any account 
                                        <a href="#">signup?</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}