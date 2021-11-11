import React from "react";
import logo1 from "./images/logo-c.jpg";
import "./css/blog.css";
const Footer = () => {
  return (
    <div>
      <div className="container-fluid footer-bg">
        <div className="container">
          <section className="footer">
            <div className="row">
              <div className="col-lg-4">
                <img
                  className="footer-logo"
                  src={logo1}
                  width="auto"
                  height="75px"
                />
                <h6>Drone Company</h6>
              </div>
              <div className="col-lg-2 col-sm-6">
                <ul className="footer-list">
                  <a class="hover-underline-animation" href="">
                    <li>About us</li>
                  </a>
                  <a class="hover-underline-animation" href="">
                    <li>Contact us</li>
                  </a>
                  <a class="hover-underline-animation" href="">
                    <li>FAQ</li>
                  </a>
                  <a class="hover-underline-animation" href="">
                    <li>Privacy</li>
                  </a>
                </ul>
              </div>
              <div className="col-lg-2 col-sm-6">
                <ul className="footer-list">
                  <a class="hover-underline-animation" href="">
                    <li>About us</li>
                  </a>
                  <a class="hover-underline-animation" href="">
                    <li>Contact us</li>
                  </a>
                  <a class="hover-underline-animation" href="">
                    <li>FAQ</li>
                  </a>
                  <a class="hover-underline-animation" href="">
                    <li>Privacy</li>
                  </a>
                </ul>
              </div>
              <div className="col-lg-2 col-sm-6">
                <ul className="footer-list">
                  <a class="hover-underline-animation" href="">
                    <li>About us</li>
                  </a>
                  <a class="hover-underline-animation" href="">
                    <li>Contact us</li>
                  </a>
                  <a class="hover-underline-animation" href="">
                    <li>FAQ</li>
                  </a>
                  <a class="hover-underline-animation" href="">
                    <li>Privacy</li>
                  </a>
                </ul>
              </div>
              <div className="col-lg-2 col-sm-6">
                <ul className="footer-list">
                  <a class="hover-underline-animation" href="">
                    <li>About us</li>
                  </a>
                  <a class="hover-underline-animation" href="">
                    <li>Contact us</li>
                  </a>
                  <a class="hover-underline-animation" href="">
                    <li>FAQ</li>
                  </a>
                  <a class="hover-underline-animation" href="">
                    <li>Privacy</li>
                  </a>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
