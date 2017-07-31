import React from 'react';
import path from 'path';

import { Tabs, Tab } from 'material-ui/Tabs';
import TweenMax from 'gsap';
import scrollTo from '../../node_modules/gsap/ScrollToPlugin';
import Sticky from 'react-sticky-el';

const Header = () => {
  return (
    <div id="home" className="header">
      <div className="name">
        <h1 className="center">Alejandro Varona</h1>
        <h3 className="center">Cool guy</h3>
      </div>
      <Sticky style={{zIndex: 1}}>
        <nav className="center">
          <Tabs className="dashboard-tabs" style={{zIndex: 99999}}>
            <Tab label="Home" onClick={() => {
              TweenMax.to(window, 0.8, {
                scrollTo: { y: '#home' }
              })
            }} />
            <Tab label="About" onClick={() => {
              TweenMax.to(window, 0.8, {
                scrollTo: { y: '#about', offsetY: 47 }
              })
            }} />
            <Tab label="Portfolio" onClick={() => {
              TweenMax.to(window, 0.8, {
                scrollTo: { y: '#portfolio', offsetY: 47 }
              })
            }} />
            <Tab label="Contact" onClick={() => {
              TweenMax.to(window, 0.8, {
                scrollTo: { y: '#contact', offsetY: 47 }
              })
            }} />
          </Tabs>
        </nav>
      </Sticky>
      <div className="profile">
        <img className="avatar center" src={path.join(__dirname, 'style/images/profile.png')} />
      </div>
    </div>
  )
}

export default Header;
