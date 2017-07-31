import React, { Component } from 'react';

import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/lib/fa';
import vis from 'vis';

import ContactDialog from './ContactDialog.jsx';

const nodes = [
  {id: 1, image: 'style/images/html.png', shape: 'circularImage', size: 40},
  {id: 2, image: '/style/images/css.png', shape: 'circularImage', size: 40},
  {id: 3, image: '/style/images/sass.png', shape: 'circularImage', size: 40},
  {id: 4, image: '/style/images/bootstrap.png', shape: 'circularImage', size: 40},
  {id: 5, image: '/style/images/github.png', shape: 'circularImage', size: 40},
  {id: 6, image: '/style/images/javascript.png', shape: 'circularImage', size: 40},
  {id: 7, image: '/style/images/nodejs.png', shape: 'circularImage', size: 40},
  {id: 8, image: '/style/images/jquery.png', shape: 'circularImage', size: 40}
];

const edges = [
  {from: 1, to: 2},
  {from: 2, to: 3},
  {from: 2, to: 4},
  {from: 6, to: 7},
  {from: 6, to: 8},
  {from: 5, to: 6},
  {from: 5, to: 1},
];
const data = {
  nodes: nodes,
  edges: edges
}
const options = {
  width: '450px',
  height: '400px'
};

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dialogOpen: false
    }
    this.handleDialogOpen = this.handleDialogOpen.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }

  handleDialogOpen() {
    this.setState({dialogOpen: true});
  }

  handleDialogClose() {
    this.setState({dialogOpen: false});
  }

  componentDidMount() {
    const container = document.getElementById('tech-tree');
    const network = new vis.Network(container, data, options);
  }

  render() {
    return (
      <div>
        <div className="social-media center">
          <a href="https://www.twitter.com/alejandrov50" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.linkedin.com/in/alejandro-varona" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.github.com/avarona" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="#" onClick={this.handleDialogOpen}>
            <FaEnvelope size={30} />
          </a>
          {
            (this.state.dialogOpen)
            ? <ContactDialog
              dialogOpen={this.state.dialogOpen}
              handleClose={this.handleDialogClose} />
            : null
          }
        </div>
        <hr className="line" />
        <div className="comment center">
          <div>
            <h2>// TECH</h2>
            <h3>I create web applications with Javascript</h3>
          </div>
          <div>
            <h2>// DESIGN</h2>
            <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
          </div>
          <div>
            <h2>// INNOVATION</h2>
            <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
          </div>
        </div>
        <hr className="line" />
        <div>
          <h1 id="about" className="title center">About Me</h1>
          <div className="left-block">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <div id="tech-tree" className="right-block" />
        </div>
      </div>
    )
  }
}

export default About;
