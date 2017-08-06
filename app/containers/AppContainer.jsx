import React from 'react';

import Header from '../components/Header.jsx';
import About from '../components/About.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Contact from '../components/Contact.jsx';

const AppContainer = () =>  {
		return (
			<div>
        <Header />
				<About />
				<Portfolio />
				<Contact />
      </div>
    )
  }

export default AppContainer;
