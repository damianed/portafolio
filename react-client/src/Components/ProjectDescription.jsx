import React, { Component } from 'react';

class ProjectDescription extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      site: props.site,
      repo: props.repository,
      description: props.description,
    }
  }
  render(){
    let site;
    if(this.state.site){
      site = <a target="_blank" href={this.state.site} class="btn" title="See Live Site"><i class="fas fa-link fa-lg"></i></a>
    }
    return(
      <div className="row col-lg-8 col-md-6 col-sm-12 align-items-center justify-content-center">
      <span className="col-lg-4 col-md-9">
        <h3>{this.state.name}</h3>
        <p>{this.state.description}</p>
        <a target="_blank" href={this.state.repo} class="btn" title="Go to Github Repository"><i class="fab fa-github fa-lg"></i></a>
        {site}
      </span>
      </div>
    )
  }
}

export default ProjectDescription;
