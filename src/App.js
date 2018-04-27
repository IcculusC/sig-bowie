import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';
import Grid from 'material-ui/Grid';

import { Header } from './components/common';
import { Album } from './components';
import { albumsSelector } from './common';


const propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      height: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
    })).isRequired,
    openUrl: PropTypes.string.isRequired,
  })).isRequired,
}

export const AppComponent = ({ list }) => (
  <MuiThemeProvider theme={createMuiTheme()} >
    <Header />
    <Grid container spacing={24} style={{ padding: '1rem' }} >
      {list.map(item => <Album key={item.id} {...item} />)}
    </Grid>
  </MuiThemeProvider>
)

AppComponent.propTypes = propTypes;
AppComponent.displayName = 'App';

export const mapStateToProps = state => ({ list: albumsSelector(state) });

export const App = connect(mapStateToProps)(AppComponent);
