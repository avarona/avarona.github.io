import React from 'react';

import ContactDialog from '../containers/ContactDialog.jsx';

const Contact = () => {
  return (
    <div id="contact-info">
      <hr id="contact" className="line" />
      <h1 className="title center">Contact Me</h1>
      <ContactDialog />
    </div>
  )
}

export default Contact;
