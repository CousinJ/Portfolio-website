import React, { useState, useEffect } from "react";
import "./AboutMe.css";

function AboutMe(props) {
  const [style, setStyle] = useState("");

  useEffect(() => {
    if (props.aboutBool === true) {
      setStyle("50%");
    } else {
      setStyle("");
    }
  }, [props.aboutBool]);
  ;

  return <div style={{ top: style }} className="about-me">


  <div className="x-button"></div>

<div className="text-container">
<div className="my-image"></div>
<div className='text'></div>
</div>

    

  </div>;
}

export default AboutMe;
