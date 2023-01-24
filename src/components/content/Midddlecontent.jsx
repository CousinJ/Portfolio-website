import React from 'react'

import Intro from './Intro';
import Projects from './Projects';
import Contact from './Contact';

function Content(props) {
    return(<div className='content-div'>
        
        <Intro aboutBool={props.aboutBool} setAboutBool={props.setAboutBool}></Intro>
        <Projects></Projects>
        <Contact></Contact>
        
        
    </div>)
}

export default Content;