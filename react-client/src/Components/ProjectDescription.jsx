import React, { Component } from 'react';

class ProjectDescription extends Component{
  render(){
    return(
      <div className="row col-lg-8 col-md-6 col-sm-12 align-items-center justify-content-center">
      <span className="col-lg-4 col-md-9">
        <h3>Weatherapp</h3>
        <p>This is a simple weather app that helps to see the weather from a location</p>
        <a href="#" class="btn" title="Go to Github Repository"><i class="fab fa-github fa-lg"></i></a>
        <a href="#" class="btn" title="See Live Site"><i class="fas fa-link fa-lg"></i></a>
      </span>
      </div>
    )
  }
}

export default ProjectDescription;
