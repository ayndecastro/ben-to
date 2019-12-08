import React from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
      minHeight: '100vh',
      width: '90%',
        border: 'red solid',
        margin: '0 auto',
      ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        backgroundPosition: "center -170px",
        backgroundSize: "100% 50% contain",
      }
    },
    Page2: {
      minHeight: '100vh',
      width: 'auto',
    },
    form: {
      position: 'absolute',
      top: '30%',
      left: '10%',
      ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
          width: '100%',
          maxWidth: '100%',
          left: '0',
          top: '50%'
        }
    }
  });

export default function LandingPageSecondPage () {
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.root}>
            
        </Grid>
    )
}