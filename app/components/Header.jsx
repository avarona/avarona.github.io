import React from 'react';
import path from 'path';

import { Tabs, Tab } from 'material-ui/Tabs';

const Header = () => {
  return (
    <div className="header">
      <div className="name">
        <h1 className="center">Alejandro Varona</h1>
        <h3 className="center">Cool guy</h3>
      </div>
      <nav className="center">
        <Tabs className="dashboard-tabs">
          <Tab label="Home" href="#home" />
          <Tab label="About" href="#about" />
          <Tab label="Portfolio" href="#portfolio" />
          <Tab label="Contact" />
        </Tabs>
      </nav>
      <div className="profile">
        <img className="avatar center" src={path.join(__dirname, 'style/images/profile.png')} />
      </div>
    </div>
  )
}

export default Header;
