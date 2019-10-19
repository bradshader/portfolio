import React, { Component } from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

class Project extends Component {
    render() {

        return(

            <AniLink paintDrip to={this.props.url} color="yellow">

            <div class="project" tabindex="1" data-aos="fade-right">
                <h3>{this.props.name}</h3>
                <p>{this.props.desc}</p>
            </div>

            </AniLink>

        );
      }
  }
  
  export default Project;