import * as React from 'react';
import logo from 'images/logo.svg';
import './styles.css';

import Button from 'components/Button';

const App = () => (
  <div className="App">
    <header className="App-header">
    </header>
    <Button svgIcon={logo} text="Submit" />
  </div>
);

export default App;
