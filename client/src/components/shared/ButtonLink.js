import React from 'react';
import Button from'@material-ui/core/Button'
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default ( props ) => {
    const useStyles = makeStyles({
        root: {
          cursor: 'pointer',
          marginRight: '5px',
          fontSize: '14px',
          width: 'fit-content',
          background: '#212121',
          color: 'white',
          '&active:': {
            color: 'white',
            textDecoration: 'none'
          },
          '&visited:':{
            color: 'white',
            textDecoration: 'none'
          }
        },
      })
    
      const classes = useStyles();
      const { dialogue, link } = props;
      return (
        link ? (
            <Link to={link && link} style={{ textDecoration: 'none '}}>
            <Button className={classes.root} {...props}>
               {dialogue && dialogue}
            </Button>
            </Link>
        )
        : (
            <Button className={classes.root} {...props}>
               {dialogue && dialogue}
            </Button>
        )
)}