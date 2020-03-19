import React from 'react';
import { Box, Anchor } from "grommet";
import { Github, LinkedinOption } from "grommet-icons";
import styles from './styles.module.scss';
import { URLS } from '../../constants';

const Placeholder = () => (
  <div className={styles.placeholderContainer}>
    <div className={styles.content}>
      <div className={styles.description}>
        <p>Hey, I'm Alex!</p>
        <p>An experienced frontend software engineer with an eye for better UI/UX design. I love Javascript and building things with React.</p>
      </div>
      <Box className={styles.box} direction='row' gap='xxlarge' justify='center'>
        <Anchor
          a11yTitle='Share feedback on Github'
          href={URLS.GITHUB}
          target='_blank'
          icon={<Github size="large" color='white' />}
        />
        <Anchor
          a11yTitle='Check out my LinkedIn'
          href={URLS.LINKEDIN}
          target='_blank'
          icon={<LinkedinOption size="large" color='white' />}
        />
      </Box>
    </div>
  </div>
);

export default Placeholder;