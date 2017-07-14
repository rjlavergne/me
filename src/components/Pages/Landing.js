import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Landing extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="pageTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>

        <div className="wrapper">
          <div className="landing">
            <h3 className="center">Welcome!</h3>
            <p className="center">My name is Robert W. Lavergne Jr, but most people call me RJ. I am a web developer with about 5&ndash;6 years of experience. I graduated from Morehouse College with a bachelor&#8217;s degree in Marketing, and learned to code at the Creative Circus, both in Atlanta, GA. I have a passion for web and front-end development and always want to learn more from the best. Outside of web I&#8217;m very much into video games, hip&ndash;hop, video editing, and football.</p>
            <p className="center">I built this portfolio using a combination of my own skills, as well as some I learned along the way. This page is the first look at what I can do. As you explore you&#8217;ll find and learn more about what I&#8217;ve worked on, what I like to do, and how to reach me.</p>
          </div>
        </div>

      </ReactCSSTransitionGroup>
    );
  }
}

export default Landing;
