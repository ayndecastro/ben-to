import React from 'react';
import BentoList from './BentoList';
import BentoForm from './BentoForm';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
    root: {
      backgroundColor: '#F6F8FA',
      padding: '0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '0 0',
      minHeight: '70rem'
    },
    bentolist: {
      backgroundColor: '#F6F8FA',
      margin: '0 1.6rem',
      flex: 1,
    },
    bentoform: {
      maxWidth: '40rem',
      margin: '1rem 1.6rem',
      flexGrow: '999'
    }
  });

  export default function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <div  className={classes.bentolist} >
        <BentoList/>
        </div>
        <div className={classes.bentoform}>
        <BentoForm 
        header={"MAKE A BENTO"}
        remove={false}
        />
        </div>
        </div>
    );
  }
