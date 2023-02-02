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
          <div className="header-1">Jason Davis</div>
          <div className="header-2">web developer</div>
          <p className="text-small">
            My name is Jason, I am 22 years old, from North Salt Lake Utah. Out
            of my many hobbies some of my favorites are snowboarding, mountain
            biking, playing guitar, and game development! My favorite band is Led
            Zeppelin or Tame Impala, and my favorite video game is Dark Souls.
            My love for video games, primarily RPGs, is what initially gave me
            the curiosity to found out how they are made. From there I learned
            to code and now programming is part of the many things I like to do.
            Another interest I have had since a young boy is entrepreneurship. I
            work to one day be an entrepreneur in the tech industry. I love the
            progression of technology and want to contribute to it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
