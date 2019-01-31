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
      <div class="project col-lg-6 col-md-12 justify-content-center" >
        <div class="project-background" style={style}>
        </div>
        <div className="row align-items-center justify-content-center h-100">
          <span>
            <button>Gihub</button>
            <button>Live</button>
          </span>
        </div>
      </div>
    )
  }
}

export default Project
