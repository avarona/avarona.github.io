import React from 'react';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    margin: '5%',
    width: 900,
    height: 450,
    overflowY: 'auto'
  }
};

// TODO: change to smaller thumbnails
const projectData = [
  {
    img: '/style/images/beatles.jpeg',
    title: 'The Beatles Tribute',
    website: 'https://avarona.github.io/beatles'
  }, {
    img: '/style/images/guessing-game.jpeg',
    title: 'Guessing Game',
    website: 'https://avarona.github.io/guessingGame'
  }, {
    img: '/style/images/quote-machine.jpeg',
    title: 'Quote Machine',
    website: 'https://avarona.github.io/quote-machine'
  }, {
    img: '/style/images/speechwriter.jpeg',
    title: 'SpeechWriter',
    website: 'https://speechwriter.herokuapp.com'
  }
];

const Portfolio = () => {
  return (
    <div className="grid">
      <hr id="portfolio" className="line" />
      <h1 className="title center">Deployed</h1>
      <div style={styles.root}>
        <GridList style={styles.gridList} cellHeight={200} cols={2} padding={50}>
          {
            projectData.map((project) => (
              <GridTile
                key={project.img}
                title={project.title}
                actionIcon={
                  <IconButton>
                    <StarBorder color="white" />
                  </IconButton>
                }>
                <a href={project.website} target="_blank" rel="noopener noreferrer">
                  <img src={project.img} />
                </a>
              </GridTile>
            ))
          }
        </GridList>
      </div>
      <h1 className="title center">Repos</h1>
    </div>
  )
}

export default Portfolio;
