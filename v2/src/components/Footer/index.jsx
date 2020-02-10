import React from "react";
import { Footer as GrommetFooter, Text, Box, Anchor } from "grommet";
import { Github, LinkedinOption } from "grommet-icons";

const Footer = () => (
  <GrommetFooter background='light-2' pad='small'>
    <Box align='center' direction='row' gap='xsmall'>
      <Text alignSelf='center' color='brand' size='small'>
        Alejandro Varona
      </Text>
    </Box>

    <Box direction='row' gap='xxsmall' justify='center'>
      <Anchor
        a11yTitle='Share feedback on Github'
        href='https://www.github.com/avarona'
        icon={<Github color='brand' />}
      />
      <Anchor
        a11yTitle='Check out my LinkedIn'
        href='https://www.linkedin.com/in/alejandro-varona'
        icon={<LinkedinOption color='brand' />}
      />
    </Box>

    <Text textAlign='center' size='xsmall'>
      Copyright © <Anchor href='https://www.varona.io'>varona.io</Anchor>
    </Text>
  </GrommetFooter>
);

export default Footer;
