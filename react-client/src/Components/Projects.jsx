import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component{
  // createProject(data){
  //   <Project
  //   image = { data.image }
  //   repository = { data.repo}
  //   site = { data.site } >
  // }

  render(){
    return (
      <div className="container-fluid">
        <div className="projects-container row" id="projects">
          <h1>Projects</h1>
          <Project />
          <Project />
        </div>
      </div>
    )
  }
}
export default Projects
