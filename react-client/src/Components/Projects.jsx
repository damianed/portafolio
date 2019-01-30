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
      <div className="projects-container row" id="projects">
        <h1>Projects</h1>
        <Project />
        <Project />
      </div>
    )
  }
}
export default Projects
