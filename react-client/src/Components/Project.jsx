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
    let style = {
      backgroundImage : "url('./weatherapp.png')",
      backgroundPosition: "center",
      backgroundrRepeat: "no-repeat",
      backgroundSize: "cover",
    }
    return (
      <div className="project col-lg-6 col-md-12" style={style}>
        <button>Gihub</button>
        <button>Live</button>
      </div>
    )
  }
}

export default Project
