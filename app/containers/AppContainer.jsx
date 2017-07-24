import React, { Component } from 'react';

import Header from '../components/Header.jsx';
import Portfolio from '../components/Portfolio.jsx';
import About from '../components/About.jsx';

class AppContainer extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div>
        <Header />
				<About />
				<Portfolio />
      </div>
    )
  }
}

export default AppContainer;
