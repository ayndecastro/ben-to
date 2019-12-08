

import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  card: {
    width: 317,
    height: 200,
    textDecoration: 'none',
    margin: 0,
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        width: '100%',
        height: '300px',
        margin: '0 auto'
      }
  },
  media: {
    height: 150,
    transition: 'all .2s ease-in-out',
    '&:hover': {
        height: 80,
        transition: 'all .2s ease-in-out'
    },
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      width: '100%',
      height: '180px',
      margin: '0 auto'
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
      paddingBottom: '1.6rem',
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

function BentoListItem({ name, cuisine, cost, id, ingredients, img }) {
  const classes = useStyles();

  return (
    <Card className={classes.card} square={true} elevation={1} >
        <CardMedia
          className={classes.media}
          image={img}
          title={name}
        />
        
        <CardContent className={classes.content}>

          
          <Typography gutterBottom variant="h5" component="h3" className={classes.header}>
          { name } ${cost}
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
          {cuisine}, {ingredients}
          </Typography>
        </CardContent>
      
      <CardActions>

        
        <Link to={"/edit/" + id + ""}  className={classes.edit}>
        <Button variant="outlined" className={classes.button}>
          Edit
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default connect()(BentoListItem);