import React,{useState} from 'react'





function Intro(props) {


// style-value
const [styleObject, setStyleValue] = useState(null)
// popup bool




  //function switching the state of the pop up info AND switching booleans for transition effect
  function switchPopup() {

    
    
}
//pop component for the more about me section.
function MoreInfo(props) {
    return(<div  className='more-info-main'>
        <div onClick={switchPopup} className='x-button'></div>
    </div>)

}


    return(<div className='intro-div'>

            <div className='intro-inner'>
                <div className='intro-title'> <h1> Hi, I'm Jason</h1>
                </div>
                    
                <div className='intro-text'>
                    <h3>• Full Stack • Web Developer • Data Analyst  </h3>
                    
                </div>
             
                <div onClick={switchPopup} className='more-about-me'>more about me</div>
                
            </div>

            <MoreInfo />

    </div>)
}

export default Intro;