import React, { useState, useEffect } from "react";
import "./AboutMe.css";
import xSymbolSvg from "../../assets/x-symbol-svgrepo-com.svg";
import myPicture from "../../assets/IMG_4469.jpg";
function AboutMe(props) {
  const [style, setStyle] = useState("");
  //use effect for sliding transition effect
  useEffect(() => {
    if (props.aboutBool === true) {
      setStyle("40%");
    } else {
      setStyle("");
    }
  }, [props.aboutBool]);
  function xHandler() {
    console.log("xHandler");

    props.setAboutBool(false);
  }

  return (
    <div style={{ top: style }} className="about-me">
      <div
        style={{ backgroundImage: `url(${xSymbolSvg})` }}
        onClick={xHandler}
        className="x-button"
      ></div>

      <div className="text-container">
        <div className="my-image-container">
          <div
            className="my-image"
            style={{ backgroundImage: `url(${myPicture})` }}
          ></div>
        </div>
        <div className="text">
          <div  className="header-1">Jason Davis</div>
          <div className="header-2">web developer</div>
          <p>
            hey there! my name is jason, I am a programmer from the salt lake
            metro area. I love coding and have a passion for it and love to
            engineer new ways to solve problems. Take a look at some of my
            projects to get a feel for what I like to build
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
