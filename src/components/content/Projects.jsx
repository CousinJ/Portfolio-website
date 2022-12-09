import React, { useState } from "react";
//import project pictures
import project_img_one from "../../assets/assassin.png";
import project_img_two from "../../assets/duelist.png";
import project_img_three from "../../assets/rogue.png";
import project_img_four from "../../assets/druid.png";

function Projects() {
  //PROJECT DATA HERE
  const project_data = [
    { name: "project1", img: project_img_one, info: "this project is so cool" },
    { name: "project2", img: project_img_two, info: "I love this project" },
    { name: "project3", img: project_img_three, info: 'I hate this one!' },
    { name: "project4", img: project_img_four, info: 'So so so awesome' },
  ];

  const [selectedProj, setSelectedProj] = useState(project_data[0]);
  let styleVar = "";
  //for each project, a project item selector...
  function ProjectItemSelector(props) {
    if (props.project.name === selectedProj.name) {
      styleVar = "white";
    } else {
      styleVar = "black";
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
        <div style={{'backgroundImage': `url(${selectedProj.img})`}} className="project-image"></div>
        <div className="project-about">{selectedProj.info}</div>
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
        <ProjectItemSelector project={project_data[3]}></ProjectItemSelector>
      </div>
      <div className="project-pic-text">
        <ProjectDetails></ProjectDetails>
      </div>

      <div className="project-tech-link"></div>
    </div>
  );
}

export default Projects;
