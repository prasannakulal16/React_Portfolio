import React from 'react';
import video from "./images/dronevideo1.mp4";
import Typewriter from "typewriter-effect";
import  { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
} from "react-bootstrap";

const Banner = () => {
   

    return (
      <div>
        <div>
          <div className="conatiner-fluid banner">
            <div className="videobg">
              <video className="banner-video" autoPlay loop muted>
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="container contents">
              <div className="banner-sub">Hi! I'm Prasanna</div>
              <br></br>
              <div className="banner-title">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("Developer")

                      .pauseFor(1000)
                      .deleteChars(7)
                      .typeString("signer")
                      .start()
                      .pauseFor(600);
                  }}
                />
                <div></div>
              </div>
              <span className="banner-sub2">Based in California .</span>
              <div className="banner-desc">
                <p>
                  I'm developer focused on crafting user‑friendly experiences, I
                  am passionate about building excellent software that improves
                  the lives of those around me.
                </p>
                <button className="banner-button">See Portfolio</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;