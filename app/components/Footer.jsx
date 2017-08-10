import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className="footer">
      <div className="copyright">
        Copyright © {year}, Alejandro Varona, All rights reserved
      </div>
    </div>
  )
}

export default Footer;
