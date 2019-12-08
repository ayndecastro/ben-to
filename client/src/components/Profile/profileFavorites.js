import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteFavorite } from '../../actions/Profile';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const Favorite = ({ bento: { image, name, cuisine, ingredients } }) => {
  const useStyles = makeStyles({
    card: {
      width: 317,
      height: 200,
      textDecoration: 'none',
      margin: 0
    },
    media: {
      height: 80,
      transition: 'all .2s ease-in-out',
      '&:hover': {
        height: 150,
        transition: 'all .2s ease-in-out'
      }
    },
    header: {
      color: 'black',
      textDecoration: 'none',
      justifyContent: 'space-between',
      marginBottom: '1.6rem'
    },
    edit: {
      color: 'black',
      textDecoration: 'none',
      marginBottom: '1.6rem',
      paddingBottom: '1.6rem'
    },
    button: {
      height: '2.4rem',
      '&:hover': {
        backgroundColor: 'none',
        color: 'blue'
      }
    },
    content: {
      marginBottom: '-1rem'
    }
  });
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image} title={name} />

      <CardContent className={classes.content}>
        <Typography
          gutterbottom='true'
          variant='h5'
          component='h3'
          className={classes.header}
        >
          {name}
        </Typography>

        <Typography variant='body2' color='textSecondary' component='p'>
          {cuisine}, {ingredients}
        </Typography>
      </CardContent>
    </Card>
  );
};

Favorite.propTypes = {
  favorite: PropTypes.array.isRequired,
  deleteFavorite: PropTypes.func.isRequired
};

export default connect(null, { deleteFavorite })(Favorite);
