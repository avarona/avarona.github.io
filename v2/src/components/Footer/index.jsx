import React from "react";
import { Footer as GrommetFooter, Text, Box, Anchor } from "grommet";
import { Github, LinkedinOption } from "grommet-icons";
import { URLS } from "../../constants";

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
        href={URLS.GITHUB}
        target='_blank'
        icon={<Github color='brand' />}
      />
      <Anchor
        a11yTitle='Check out my LinkedIn'
        href={URLS.LINKEDIN}
        target='_blank'
        icon={<LinkedinOption color='brand' />}
      />
    </Box>

    <Text textAlign='center' size='xsmall'>
      Copyright © <Anchor href={URLS.VARONA}>varona.io</Anchor>
    </Text>
  </GrommetFooter>
);

export default Footer;
