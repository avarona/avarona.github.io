import React from "react";
import { Link } from "react-router-dom";
import { Box, Header, Nav, Anchor, Image } from "grommet";
import headshot from "../../images/headshot.png";

const items = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const NavBar = () => (
  <Header background='drk-1' pad='medium'>
    <Box direction='row' align='center' gap='small'>
      <Box height='xxsmall' width='xxsmall' round='full' flex='false'>
        <Image src={headshot} fit='cover' />
      </Box>
      <Anchor href='/'>Alejandro Varona</Anchor>
    </Box>

    <Nav direction='row'>
      {items.map(item => (
        <Link key={item.label} to={item.href}>
          {item.label}
        </Link>
      ))}
    </Nav>
  </Header>
);

export default NavBar;
