import React, { Component } from 'react'

class Project extends Component{
  constructor(props){
    super(props);
    this.state = {
      image: props.image,
      repository: props.repository,
      site: props.site
    };
  }
  render(){
    return (
      <div className="project">
        Project
      </div>
    )
  }
}

export default Project
