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
      <CreateProject position={this.state.imgLeft}/>
    )
    function CreateProject(props){
      const position = props.position;
      if(position){
        return(
          <div class="project row col-12">
              <SideImage />
              <ProjectDescription />
          </div>
        )
      }else{
        return(
          <div class="project row col-12">
            <ProjectDescription />
            <SideImage />
          </div>
        )
      }
    }

    function SideImage(props){
      return(
        <div class="col-lg-4 col-md-6 col-sm-12 project-background" style={style}>
        </div>
      )
    }
  }
}

export default Project
