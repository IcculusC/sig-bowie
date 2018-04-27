import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';


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

const BlackstarIcon = props => (
  <SvgIcon {...props} >
    <path d='m55,237 74-228 74,228L9,96h240'/>
  </SvgIcon>
)

export const HeaderComponent = ({ classes }) => (
  <div className={classes.root} >
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton className={classes.blackstar} color="inherit" aria-label="Bowie Baby">
          <BlackstarIcon viewBox='0 0 260 260' nativeColor='#000' />
        </IconButton>
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
