import React, { Component } from 'react';
import ProjectDescription from "./ProjectDescription";

class Project extends Component{
  constructor(props){
    super(props);
    this.state = {
      image: props.image,
      repository: props.repository,
      site: props.site,
      imgLeft: props.imgLeft
    };
  }
  render(){
    let style = {
      backgroundImage : "url('./weatherapp.png')",
      backgroundPosition: "center",
      backgroundrRepeat: "no-repeat",
      backgroundSize: "cover",
      boxShadow: "inset 0 1px 1px 1px rgba(0, 0, 0, 0.075)",
    }
    return (
      <CreateProject site={this.state.site} repo={this.state.repository} position={this.state.imgLeft}/>
    )
    function CreateProject(props){
      const order = props.position ? "order-md-first" : "order-md-last";
        return(
          <div class="project row col-12">
              <SideImage order={order}/>
              <ProjectDescription site={props.site} repository={props.repo}/>
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
