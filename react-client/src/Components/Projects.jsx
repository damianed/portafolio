import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component{
  createProject(data){
    <Project
    image = { data.image }
    repository = { data.repo}
    site = { data.site } />
  }
  render(){
    return (
      <div className="container-fluid" style={{paddingLeft:0, paddingRight:0}}>
        <div className="projects-container row justify-content-center" id="projects">
          <h1>Projects</h1>
          <Project imgLeft={true}/>
          <Project imgLeft={false}/>
        </div>
      </div>
    )
  }
}
export default Projects
