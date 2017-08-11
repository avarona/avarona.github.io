import React, { Component } from 'react';

import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/lib/fa';
import vis from 'vis';

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
  height: '400px',
  interaction: {
    zoomView: false,
    dragView: false,
    dragNodes: true,
    selectable: true,
    selectConnectedEdges: true
  }
};

class About extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const container = document.getElementById('tech-tree');
    const network = new vis.Network(container, data, options);
  }

  render() {
    return (
      <div>
        <div id="social-media" className="center">
          <a href="https://www.twitter.com/alejandrov50" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.linkedin.com/in/alejandro-varona" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.github.com/avarona" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="mailto:avarona10@gmail.com" target="_blank" rel="noreferrer noopener">
            <FaEnvelope size={30} />
          </a>
        </div>
        <hr className="line" />
        <div className="comment center">
          <div>
            <h2>{'{ TECH }'}</h2>
            <h4>&emsp;I create web applications from front to back, using Javascript with it's increasingly popular libraries and frameworks like React or JQuery.</h4>
          </div>
          <div>
            <h2>{'{ DESIGN }'}</h2>
            <h4>&emsp;Open source libraries are great, but they are no match to having the necessary CSS skills or a keen eye for detail in front-end design.</h4>
          </div>
          <div>
            <h2>{'{ ENGINEER }'}</h2>
            <h4>&emsp;I don't shy away from tackling problems head on, visiting all possible outlets until the best solution is found.</h4>
          </div>
        </div>
        <hr className="line" />
        <div>
          <h1 id="about" className="title center">About Me</h1>
          <div className="line">
            <div className="left-block">
              <p>Hi, I'm Alejandro and I write code. I attended Fullstack Academy January of 2017, and have since then started some cool projects showcased below. If you like a project or want to get intouch with me, send me a message using the contact form below.</p>
              <ul className="about-ul">
                <li>
                  Javascript
                  <ul>
                    <li>React</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>JQuery</li>
                  </ul>
                </li>
                <li>
                  Design
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Sass</li>
                    <li>Bootstrap</li>
                  </ul>
                </li>
              </ul>
              <ul className="about-ul">
                <li>
                  Databases
                  <ul>
                    <li>Sequelize</li>
                    <li>SQL</li>
                  </ul>
                </li>
                <li>
                  Developer Tools
                  <ul>
                    <li>Webpack</li>
                    <li>Gulp</li>
                    <li>Git</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div id="tech-tree" className="right-block" />
          </div>
        </div>
      </div>
    )
  }
}

export default About;
