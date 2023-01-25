import React from 'react'
import git_hub_icon from '../../assets/github-svgrepo-com.svg'
import linkedin_icon from '../../assets/linkedin-svgrepo-com.svg'
function Bar() {

const handleGithub = () => {
    window.location.href = "https://github.com/CousinJ"
    

} 
const handleLinkedin = () => {
    window.location.href = "https://www.linkedin.com/in/jason-davis-a4a80724a/"

    
}

    return(<div className='nav-bar'>
        <div className='name-div'>
            <h2>Jason Davis</h2>
        </div>
        <div className='social-icon-container'>
            <div  className='icon-shell'> <div onClick={handleLinkedin} style={{'backgroundImage': `url(${linkedin_icon})`}} className='social-icon'></div></div>
            <div className='icon-shell'> <div onClick={handleGithub} style={{'backgroundImage': `url(${git_hub_icon})`}} className='social-icon'></div></div>
           
            
        </div>
    </div>)
}

export default Bar;
