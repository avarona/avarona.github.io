import React, { Component } from 'react';

import Header from '../components/Header.jsx';

class AppContainer extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div>
				<h1>App Container</h1>
        <Header />
      </div>
    )
  }
}

export default AppContainer;
