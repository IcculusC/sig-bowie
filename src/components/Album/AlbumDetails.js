import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PlayArrow from '@material-ui/icons/PlayArrow';


const styles = theme => ({
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 1 100%',
  },
  content: {
    flex: '1 0 auto',
  },
  open: {
    display: 'flex',
    alignItems: 'space-between',
    padding: '1rem',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  }
})

const propTypes = {
  classes: PropTypes.shape({
    details: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    open: PropTypes.string.isRequired,
    leftIcon: PropTypes.string.isRequired,
  }).isRequired,
  openUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

const AlbumDetailsComponent = ({ classes, title, openUrl }) => (
  <div className={classes.details} >
    <CardContent className={classes.content} >
      <Typography component='p'>{ title }</Typography>
    </CardContent>
    <div className={classes.open} >
      <Button
        color='secondary'
        variant='raised'
        href={openUrl}
        target='_blank'
        size='small'
        fullWidth
      >
        <PlayArrow className={classes.leftIcon} />
        Play on Spotify
      </Button>
    </div>
  </div>
);

AlbumDetailsComponent.propTypes = propTypes;
AlbumDetailsComponent.displayName = 'AlbumDetails';

export const AlbumDetails = withStyles(styles)(AlbumDetailsComponent);
