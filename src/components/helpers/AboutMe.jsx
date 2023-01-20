import React, { useState, useEffect } from "react";
import "./AboutMe.css";
import xSymbolSvg from "../../assets/x-symbol-svgrepo-com.svg"

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
  ;

function xHandler() {
  console.log("xHandler");
  
  props.setAboutBool(false)
}

  return <div style={{ top: style }} className="about-me">


  <div style={{'backgroundImage': `url(${xSymbolSvg})`}} onClick={xHandler} className="x-button"></div>

<div className="text-container">
<div className="my-image"></div>
<div className='text'></div>
</div>

    

  </div>;
}

export default AboutMe;
