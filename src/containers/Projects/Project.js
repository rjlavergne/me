import React, { Component } from 'react';
import ProModal from './Modal/Modal';
import { ModalManager } from 'react-dynamic-modal';
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';

          // <img src={this.props.project.imgLink} alt={this.props.project.imgAlt} />
class Project extends Component {
  openModal(){
    const details = (
      <div className="projectModal">
        <h3>{this.props.project.name}</h3>
        <h5>{this.props.project.company} &ndash; {this.props.project.year}</h5>

        <div className="projectDetails">
          <Carousel axis="horizontal" showThumbs={false} showArrows={true} showStatus={false} showIndicators={false} autoPlay={true} transitionTime={500} infiniteLoop={true} dynamicHeight emulateTouch>
            {this.props.project.imgLinks.map((imgLink, i)=> {
               return <div key={i}><img src={imgLink} alt={this.props.project.imgAlt} /></div>
            })}

          </Carousel>
          <span>To sum things up...</span>
          <p>{this.props.project.summary}</p>

          <span>Built using...</span>
          <ul className="skillList">
            {this.props.project.skills.map((skill, i)=> {
              return <li key={i}>{skill}</li>
            })}
          </ul>

          {this.props.project.siteActive &&
            <a href={this.props.project.siteURL} target="_blank" rel="noopener noreferrer">Visit Site</a>
          }
        </div>

      </div>
    );
    ModalManager.open(<ProModal details={details} onRequestClose={() => true}/>);
  }
  render() {
    return (
      <div className="project" onClick={this.openModal.bind(this)}>
        <h2>{this.props.project.name}</h2>
        <h5>{this.props.project.company} &ndash; {this.props.project.year}</h5>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Project);
