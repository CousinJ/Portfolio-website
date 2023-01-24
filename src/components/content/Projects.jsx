import React, { useState } from "react";
//import project pictures
import project_img_one from "../../assets/cryptoworld-project-image.png";
import project_img_two from "../../assets/omens-project-image.png";
import project_img_three from "../../assets/ytCommentApp-project-image.png";

function Projects() {
  //PROJECT DATA HERE
  const project_data = [
    {
      name: "Crypto World",
      img: project_img_one,
      ghLink: '/' ,
      ytLink: '/' ,
      info: "This was my first project at Devmountain. I created a site that can simulate crypto trading with real time prices of coins. I used the Coinbase API to access the realtime prices of the coins and stored user data in a postgres SQL database. ",
    },
    {
      name: "Omens",
      img: project_img_two,
      ghLink: '/' ,
      ytLink: '/' ,
      info: "For my second and final project at Devmountain, I created a multiplayer game using sockets with react. It is a mafia like guessing game where four players or more can vote out the imposter of the group. ",
    },
    {
      name: "Youtube Comment Sorter",
      img: project_img_three,
      ghLink:'/' ,
      info: "Using the Youtube v3 data api, I created a web app with only python and the flask framework to extract the comments from any given video that the user chooses and run analytics to sort the most liked comments on the video. The ",
    },
  ];

  const [selectedProj, setSelectedProj] = useState(project_data[0]);
  let styleVar = "";
  //for each project, a project item selector...
  function ProjectItemSelector(props) {
    if (props.project.name === selectedProj.name) {
      styleVar = "#5467bb";
    } else {
      styleVar = "white";
    }
    return (
      <div
        onClick={() => {
          setSelectedProj(props.project);
        }}
        className="select-list-item"
        style={{ color: `${styleVar}` }}
      >
        {props.project.name}
      </div>
    );
  }
  //ONE component for project img and project details.
  function ProjectDetails() {
    //dynamic content here
    return (
      <div className="project-details">
        <div
          style={{ backgroundImage: `url(${selectedProj.img})` }}
          className="project-image"
        ></div>
        <div className="project-about">{selectedProj.info}</div>
        <div className="link-container">
        <a href={`${selectedProj.ghLink}`}>github repo</a>
        {selectedProj.ytLink &&  <a href={`${selectedProj.ytLink}`}>youtube demo</a>}
         
       
        </div>
        
      </div>
    );
  }
  //=======================================================================================================================================================
  return (
    <div className="projects-div">
      <div className="project-select">
        <ProjectItemSelector project={project_data[0]}></ProjectItemSelector>
        <ProjectItemSelector project={project_data[1]}></ProjectItemSelector>
        <ProjectItemSelector project={project_data[2]}></ProjectItemSelector>
      </div>
      <div className="project-pic-text">
        <ProjectDetails></ProjectDetails>
      </div>

      <div className="project-tech-link"></div>
    </div>
  );
}

export default Projects;
