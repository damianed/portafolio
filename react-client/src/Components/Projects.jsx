import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {
      left: false,
      projects: [],
      intervalSet: false,
    }
  }
  createProjects(){
    let projects = [];
    let left = true;
    for(let project in this.state.projects){
      project = this.state.projects[project];
      console.log(project);
      projects.push(<Project name={project.name} repository={project.repository} site={project.site} image={project.image} description={project.description} imgLeft={left}/>);
      left = !left;
    }
    return projects;
  }
  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
      this.getDataFromDb();
      // if (!this.state.intervalIsSet) {
      //   let interval = setInterval(this.getDataFromDb, 1000);
      //   this.setState({ intervalIsSet: interval });
      // }
    }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }
  getDataFromDb(){
    fetch("http://localhost:8080/api/getData")
      .then(data => data.json())
      .then(res =>{
        console.log(res.data);
        this.setState({ projects: res.data });
      })
  }

  render(){
    return (
      <div className="container-fluid" style={{paddingLeft:0, paddingRight:0}}>
        <div className="projects-container row justify-content-center" id="projects">
        <h1>Projects</h1>
          {this.createProjects()}
        </div>
      </div>
    )
  }
}
export default Projects
