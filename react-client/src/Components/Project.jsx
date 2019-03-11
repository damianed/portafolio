import React, { Component } from 'react';
import ProjectDescription from "./ProjectDescription";

class Project extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      image: props.image,
      repository: props.repository,
      site: props.site,
      description: props.description,
      imgLeft: props.imgLeft
    };
  }
  render(){
    let style = {
      backgroundImage : "url('./"+this.state.image+"')",
      backgroundPosition: "center",
      backgroundrRepeat: "no-repeat",
      backgroundSize: "cover",
      boxShadow: "inset 0 1px 1px 1px rgba(0, 0, 0, 0.075)",
    }
    return (
      <CreateProject name={this.state.name} site={this.state.site} repo={this.state.repository} position={this.state.imgLeft} description={this.state.description}/>
    )
    function CreateProject(props){
      const order = props.position ? "order-md-first" : "order-md-last";
        return(
          <div class="project row col-12">
              <SideImage order={order}/>
              <ProjectDescription site={props.site} name={props.name} repository={props.repo} description={props.description}/>
          </div>
        )
    }

    function SideImage(props){
      const order = props.order;
      return(
        <div class={"col-lg-4 col-md-6 col-sm-12 " + order + " row project-background"} style={style}>
        </div>
      )
    }
  }
}

export default Project
