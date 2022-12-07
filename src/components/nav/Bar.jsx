import React from 'react'
import git_hub_icon from '../../assets/github-svgrepo-com.svg'
import linkedin_icon from '../../assets/linkedin-svgrepo-com.svg'
function Bar() {
    return(<div className='nav-bar'>
        <div className='name-div'>
            <h2>Jason Davis</h2>
        </div>
        <div className='social-icon-container'>
            <div  className='icon-shell'> <div style={{'backgroundImage': `url(${linkedin_icon})`}} className='social-icon'></div></div>
            <div className='icon-shell'> <div style={{'backgroundImage': `url(${git_hub_icon})`}} className='social-icon'></div></div>
           
            
        </div>
    </div>)
}

export default Bar;