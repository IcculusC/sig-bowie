import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


const styles = {
  root: {
    flexGrow: 1,
  },
};

const propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
};

export const HeaderComponent = ({ classes }) => (
  <div className={classes.root} >
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
            Bowie Baby
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

HeaderComponent.propTypes = propTypes;
HeaderComponent.displayName = 'Header';

export const Header = withStyles(styles)(HeaderComponent);
