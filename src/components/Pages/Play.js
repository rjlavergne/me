import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Play extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="pageTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>

        <div className="wrapper">
          <p className="center">I am an avid gamer, and have been since the age of 3, starting with a Sega Genesis and Sonic the Hedgehog 2. In recent years I&#8217;ve become a PC gamer almost exclusively. I also record and edit gameplay videos and stream live on Twitch time to time. </p>
          <p className="center">Some of my videos can be found below. They don&#8217;t have many views but I actually kind of enjoy the process of video editing. I used Adobe Premier to create and edit all the videos on my channel.</p>
          <div className="vidContainer">
            <iframe width="75%" height="315" title="Camile" src="https://www.youtube.com/embed/xUfiGS66Nc8?rel=0&amp;controls=1&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
            <iframe width="75%" height="315" title="Naut" src="https://www.youtube.com/embed/n0gPGdOHwGM?rel=0&amp;controls=1&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
            <p className="center">More on my gaming <a className="youtube" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UChXoLYlHpk6VePYe4aqREWA">YouTube</a> channel</p>
          </div>
        </div>

      </ReactCSSTransitionGroup>
    );
  }
}

export default Play;
