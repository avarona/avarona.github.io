import React from 'react';

import { GridList, GridTile } from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    margin: '0 10%',
    width: 900,
    height: '100%', // 450
    overflowY: 'auto'
  },
   gridImage: {
     width: '99%',
   }
};

// TODO: change to smaller thumbnails size: 320x240
const deployedApps = [
  {
    img: '/style/images/thumbs/beatles.png',
    title: 'The Beatles Tribute',
    website: 'https://avarona.github.io/beatles'
  }, {
    img: '/style/images/thumbs/guessing-game.png',
    title: 'Guessing Game',
    website: 'https://avarona.github.io/guessing-game'
  }, {
    img: '/style/images/thumbs/quote-machine.png',
    title: 'Quote Machine',
    website: 'https://avarona.github.io/quote-machine'
  }, {
    img: '/style/images/thumbs/speechwriter.png',
    title: 'SpeechWriter',
    website: 'https://speechwriter.herokuapp.com'
  }
];

const repoApps = [
  {
    img: '/style/images/thumbs/quote-machine.jpeg',
    title: 'Messenger App',
    subtitle: 'Electron',
    website: 'https://www.github.com/avarona/messenger-app'
  }, {
    img: '/style/images/thumbs/quote-machine.jpeg',
    title: 'React App',
    subtitle: 'Fullstack boilerplate code',
    website: 'https://www.github.com/avarona/react-app'
  }, {
    img: '/style/images/thumbs/quote-machine.jpeg',
    title: 'Custom Search Engine',
    subtitle: 'Google search in terminal',
    website: 'https://www.github.com/avarona/cse-ruby'
  }, {
    img: '/style/images/thumbs/quote-machine.jpeg',
    title: 'Amazon Smile',
    subtitle: 'Chrome extension',
    website: 'https://www.github.com/avarona/smile-chrome'
  }
]

const Portfolio = () => {
  return (
    <div className="grid">
      <hr id="portfolio" className="line" />
      <h1 className="title center">Deployed Apps</h1>
      <div style={styles.root}>
        <GridList style={styles.gridList} cellHeight={200} cols={3} padding={50}>
          {
            deployedApps.map((project) => (
              <GridTile
                key={project.website}
                title={project.title}
                className="thumbnail"
                containerElement={<a href={project.website} target="_blank" rel="noopener noreferrer"/>}
              >
                <img src={project.img}
                  style={styles.gridImage}
                />
              </GridTile>
            ))
          }
        </GridList>
      </div>
      <h1 className="title center">Repositories</h1>
      <div style={styles.root}>
        <GridList style={styles.gridList} cellHeight={200} cols={3} padding={50}>
          {
            repoApps.map((project) => (
              <GridTile
                key={project.website}
                title={project.title}
                subtitle={project.subtitle}
                className="thumbnail"
                containerElement={<a href={project.website} target="_blank" rel="noopener noreferrer"/>}
              >
                <img src="style/images/github-grid.png"
                  style={styles.gridImage}
                />
              </GridTile>
            ))
          }
        </GridList>
      </div>
    </div>
  )
}

export default Portfolio;
