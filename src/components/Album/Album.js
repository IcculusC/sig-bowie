import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardMedia } from 'material-ui/Card';

import { AlbumDetails } from './AlbumDetails';


const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  cover: {
    width: 150,
    height: 150,
    flexShrink: 0,
  },
}

const propTypes = {
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    height: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  })).isRequired,
  openUrl: PropTypes.string.isRequired,
};

const AlbumComponent = ({ classes, name, releaseDate, images, openUrl }) => (
  <Grid item xs={12} lg={4} >
    <Card className={classes.card} >
      <AlbumDetails
        openUrl={openUrl}
        title={name}
      />
      <CardMedia
        className={classes.cover}
        image={images[0].url}
        title={name}
      />
    </Card>
  </Grid>
);

AlbumComponent.propTypes = propTypes;
AlbumComponent.displayName = 'Album';

export const Album = withStyles(styles)(AlbumComponent);
