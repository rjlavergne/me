import React, { Component } from 'react';
import Project from './Project';
import { connect } from 'react-redux';

class ProjectList extends Component {
  render() {
    return (
      <div className="projectList">
        {this.props.projects.map((project)=> {
          return <Project project={project} key={project.id} />
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(ProjectList);
