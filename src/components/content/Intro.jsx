import React,{useState} from 'react'





function Intro(props) {


function handleClick() {
    props.setAboutBool(!props.aboutBool)
}



    return(<div className='intro-div'>

            <div className='intro-inner'>
                <div className='intro-title'> <h1> Hi, I'm Jason</h1>
                </div>
                    
                <div className='intro-text'>
                    <h3>• Full Stack • Web Developer • Data Analyst  </h3>
                    
                </div>
             
                <div onClick={handleClick} className='more-about-me'>more about me</div>
                
            </div>

            
    </div>)
}

export default Intro;