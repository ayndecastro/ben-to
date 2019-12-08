import React from 'react';
import UserComponent from '../components/UserComponent';
import { makeStyles } from '@material-ui/styles';
import Header from '../components/Header';

const useStyles = makeStyles({
    root: {
      
    }
  });

  export default function Dashboard(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
        <Header/>
          <UserComponent />
        </div>
    );
  }
