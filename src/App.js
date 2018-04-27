import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';
import Grid from 'material-ui/Grid';

import { Header } from './components/common';
import { Album } from './components';
import { albumsSelector } from './common';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme()} >
        <Header />
        <Grid container spacing={24} justify='center' alignItems='stretch' style={{ padding: '1rem' }} >
        {this.props.list.map(item => <Album key={item.id} {...item} />)}
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default connect(state => ({ list: albumsSelector(state) }))(App);
