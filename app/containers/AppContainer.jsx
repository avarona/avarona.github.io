import React, { Component } from 'react';

import Header from '../components/Header.jsx';
import Portfolio from '../components/Portfolio.jsx';

class AppContainer extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div>
        <Header />
				<Portfolio />
      </div>
    )
  }
}

export default AppContainer;
