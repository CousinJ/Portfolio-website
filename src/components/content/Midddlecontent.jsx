import React from 'react'

import Intro from './Intro';
import Projects from './Projects';
import Blog from './Blog';

function Content() {
    return(<div className='content-div'>
        
        <Intro></Intro>
        <Projects></Projects>
        <Blog></Blog>
        
    </div>)
}

export default Content;