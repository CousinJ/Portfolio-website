import React, { useState } from "react";

function Intro(props) {
  function handleClick() {
    props.setAboutBool(!props.aboutBool);
  }

  return (
    <div className="intro-div">
      <div className="intro-inner">
        <div className="intro-title">
          {" "}
          <h1> Hi, I'm Jason</h1>
        </div>
        <div className="intro-text">
          <h3>• Full Stack • Web Developer • Data Analyst </h3>
        </div>
        I am a software developer from the Salt Lake area with a passion for
        creating new technology. As a full stack developer, I work primarily with
        JavaScript and Python. I love learning new technologies to further my
        skills as a developer, and test the limits of what I can build with code.
        <div onClick={handleClick} className="more-about-me">
          More About Me
        </div>
      </div>
    </div>
  );
}

export default Intro;
