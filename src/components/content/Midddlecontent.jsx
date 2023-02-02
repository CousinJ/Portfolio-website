import React from 'react'

import Intro from './Intro';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../footer/Footer'
function Content(props) {
    return(<div className='content-div'>
        
        <Intro aboutBool={props.aboutBool} setAboutBool={props.setAboutBool}></Intro>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
        
        
    </div>)
}

export default Content;