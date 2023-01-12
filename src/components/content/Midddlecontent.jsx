import React from 'react'

import Intro from './Intro';
import Projects from './Projects';
import Blog from './Blog';

function Content(props) {
    return(<div className='content-div'>
        
        <Intro aboutBool={props.aboutBool} setAboutBool={props.setAboutBool}></Intro>
        <Projects></Projects>
        <Blog></Blog>
        
    </div>)
}

export default Content;