import React, { Component } from 'react';

import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/lib/fa';

import ContactDialog from './ContactDialog.jsx';

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
            <h2>// EYE CATCH</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
          </div>
          <div>
            <h2>// EYE CATCH</h2>
            <h3>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h3>
          </div>
          <div>
            <h2>// EYE CATCH</h2>
            <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
          </div>
        </div>
        <hr id="about" className="line" />
        <div>
          <h1 className="title center">About Me</h1>
          <div>
            <img className="round" src="/style/images/html.png" />
            <img className="round" src="/style/images/css.png" />
            <img className="round" src="/style/images/sass.png" />
            <img className="round" src="/style/images/bootstrap.png" />
            <img className="round" src="/style/images/github.png" />
            <img className="round" src="/style/images/javascript.png" />
            <img className="round" src="/style/images/nodejs.png" />
            <img className="round" src="/style/images/jquery.png" />
          </div>
        </div>
      </div>
    )
  }
}

export default About;
