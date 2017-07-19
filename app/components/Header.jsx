import React from 'react';
import path from 'path';

const Header = () => {
  return (
    <div>
      <h3>Header</h3>
      <img src={path.join(__dirname, 'style/images/angular.png')} />
    </div>
  )
}

export default Header;
