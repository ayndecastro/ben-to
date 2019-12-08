import React from 'react';
import BentoList from '../components/BentoList';
import { makeStyles } from '@material-ui/styles';
import Header from '../components/Header';
import AddBentoPage from './AddBentoPage';

const useStyles = makeStyles({
    root: {
      backgroundColor: '#F6F8FA',
      padding: '0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '0 0',
      minHeight: '70rem',
      overflow: 'hidden'
    },
    bentolist: {
      backgroundColor: '#F6F8FA',
      margin: '1rem 1.6rem',
      flex: 1,
    },
    bentoform: {
      maxWidth: '40rem',
      margin: '1rem 1.6rem',
      flexGrow: '999',
      ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        width: '100vw',
        maxWidth: '100vw',
        margin: '0',
      }
    }
  });

  export default function Dashboard(props) {
    const classes = useStyles();
    const value = props.match.params.variable;
    
    return (
        <div>
        <Header/>
        <div className={classes.root}>
        <div  className={classes.bentolist} >
        
        <BentoList
        value={value}
        />
        </div>
        <div className={classes.bentoform}>
          <AddBentoPage />
        </div>
        </div>
        </div>
    );
  }
