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
          <Project repository={"https://github.com/damianed/django_weatherapp/"} site={"https://sleepy-cliffs-65876.herokuapp.com"} imgLeft={true}/>
          <Project repository={"https://github.com/damianed/django_weatherapp/"} site={"https://sleepy-cliffs-65876.herokuapp.com"} imgLeft={false}/>
        </div>
      </div>
    )
  }
}
export default Projects
