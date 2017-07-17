import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Contact extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="pageTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>

        <div className="wrapper contact">
          <p className="center gmail">
            <a href="mailto:rjlavergne@gmail.com" target="_blank" rel="noopener noreferrer" >rjlavergne@gmail.com</a>
          </p>
          <p className="center linked">
            <a href="https://www.linkedin.com/in/rjlavergne/" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
          </p>
          <p className="center location">Current City: <strong>Oakland, CA</strong></p>
          <p className="center resume">Looking for the <a href={process.env.PUBLIC_URL + '/resume_v3.pdf'} target="_blank">resumé</a>?</p>
        </div>

      </ReactCSSTransitionGroup>
    );
  }
}

export default Contact;
