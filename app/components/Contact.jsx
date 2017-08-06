import React from 'react';

import ContactDialog from '../containers/ContactDialog.jsx';

const styles = {
  image: {
    width: '250px',
    margin: '0 auto'
  }
}

const Contact = () => {
  return (
    <div id="contact-info">
      <hr id="contact" className="line" />
      <h1 className="title center">Contact Me</h1>
      <div id="contact-input" className="center">
        <div className="image-container">
          <img src="style/images/profile2.png" style={styles.image} />
        </div>
        <ContactDialog />
      </div>
    </div>
  )
}

export default Contact;
