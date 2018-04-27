import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    height: 150,
    flexShrink: 0,
  },
  open: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
  },
}

const propTypes = {
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
      <div className={classes.details} >
        <CardContent className={classes.content} >
          <Typography variant='p'>{ name }</Typography>
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
