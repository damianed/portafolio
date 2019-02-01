import React, { Component } from 'react';

class ProjectDescription extends Component{
  render(){
    return(
      <div className="row col-lg-8 col-md-6 col-sm-12 align-items-center h-100">
      <span className="col">
        <h3>Weatherapp</h3>
        <p>This is a simple weather app that helps to see the weather from a location</p>
        <button>Gihub</button>
        <button>Live</button>
      </span>
      </div>
    )
  }
}

export default ProjectDescription;
