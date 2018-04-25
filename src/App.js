import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';

import { Header } from './components/common';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme()} >
        <Header />
      </MuiThemeProvider>
    );
  }
}

export default App;
