'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../public/style/layout.scss';

const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>,
  document.getElementById('origin')
);
