import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


const styles = {
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  open: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
  },
}

const propTypes = {
  classes: PropTypes.shape({
    details: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    open: PropTypes.string.isRequired,
  }).isRequired,
  openUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

const AlbumDetailsComponent = ({ classes, title, openUrl }) => (
  <div className={classes.details} >
    <CardContent className={classes.content} >
      <Typography variant='p'>{ title }</Typography>
    </CardContent>
    <div className={classes.open} >
      <Button
        color='secondary'
        variant='raised'
        href={openUrl}
        target='_blank'
      >
        Open
      </Button>
    </div>
  </div>
);

AlbumDetailsComponent.propTypes = propTypes;
AlbumDetailsComponent.displayName = 'AlbumDetails';

export const AlbumDetails = withStyles(styles)(AlbumDetailsComponent);
