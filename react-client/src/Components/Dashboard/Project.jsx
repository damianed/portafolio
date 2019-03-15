import React, { Component } from 'react';

class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
          name: props.name,
          id: props.id,
        };
      }
    render(){
        let style = {
            boxShadow: "inset 0 1px 1px 1px rgba(0, 0, 0, 0.075)",
        }
        return (
            <div class="project row col-12">
                <h2>Weather App</h2>
            </div>
        )
    }
}

export default Project;