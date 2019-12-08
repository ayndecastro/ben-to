import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { deleteBento } from '../../actions/Bento';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const MyBento = ({
  bento: { _id, nameofbento, cuisine, ingredients, cost, image, user },
  auth
}) => {
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
    <Fragment>
      {!auth.loading && (
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={image}
            title={nameofbento}
          />

          <CardContent className={classes.content}>
            <Typography
              gutterbottom='true'
              variant='h5'
              component='h3'
              className={classes.header}
            >
              {nameofbento} ${cost / 100}
            </Typography>

            <Typography variant='body2' color='textSecondary' component='p'>
              {cuisine}, {ingredients}
            </Typography>
          </CardContent>

          <CardActions>
            <Link to={`/bento/edit-bento/${_id}`} className={classes.edit}>
              <Button variant='outlined' className={classes.button}>
                Edit
              </Button>
            </Link>
          </CardActions>
        </Card>
      )}
    </Fragment>
  );
};

MyBento.propTypes = {
  bento: PropTypes.object.isRequired,
  deleteBento: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteBento })(MyBento);
