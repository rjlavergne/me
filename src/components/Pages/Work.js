import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ProjectList from '../../containers/Projects/ProjectList';

class Work extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="pageTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>

        <div className="wrapper work">
          <p className="center">Although a lot of the work I have done in the past has been replaced and is no longer live, I still enjoy talking about my experience with the project.</p>
          <p className="center">This portfolio is actually the first piece of work you get to enjoy, and here you can find the <a href="https://github.com/rjlavergne/me" target="_blank" rel="noopener noreferrer">github</a> repo for it.</p>
          <ProjectList />
          <p className="center small">* = Site has changed/expired since last worked on.</p>
        </div>

      </ReactCSSTransitionGroup>
    );
  }
}


export default Work;
