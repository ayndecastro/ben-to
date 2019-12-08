import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import BentoList from './BentoList';
import AddBentoPage from '../Pages/AddBentoPage';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import avatarImg from '../../images/avatar.jpg';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    margin: 0,
    height: '84vh'
  },
  container: {
    width: '80%',
    margin: '0 auto',
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        width: '100%'
      }
  },
  hero: {
    margin: '0',
    minHeight: '10rem'
  },
  bigAvatar: {
    margin: '3.5rem 0 3.5rem 3.5rem',
    width: '100px',
    height: '100px',
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    margin: '3.5rem 0',
    fontWeight: 'Light',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    color: '#737373',
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: '5rem',
    }
  },
  name: {
    fontSize: '50px',
    lineHeight: '36px',
    letterSpacing: 'normal',
    color: '#212121',
    margin: '1rem 0',
    fontWeight: 'Light',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '3rem'
    }
  },
  name2: {
    fontSize: '13px'
  },
  form: {
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      width: '70%',
      overflowX: 'hidden'
    }
  },
  joinedAt: {
    letterSpacing: '-0.8px',
  }
  });

  export default function Dashboard(props) {
    const classes = useStyles();  
    return (
      <div className={classes.root}>
        <Grid className={classes.container} container spacing={2}>
            <Grid item xs={12} >
                <Paper className={classes.hero} elevation={1}>
                <Grid container spacing={0}>
                  <Grid item xs={2}
                  >
                    <Avatar alt="Remy Sharp" 
                    className={classes.bigAvatar} 
                    src={avatarImg}
                    />
                  </Grid>
                  
                  <Grid item xs={8} className={classes.nameContainer}>
                    <Typography variant="h2" className={classes.name}>
                    Bobby Lee
                    </Typography>
                    <Divider />
                    <Typography variant="body2" className={classes.name2} gutterBottom>
                      Austin, Texas
                    </Typography>
                  </Grid>
                  
                </Grid>
                </Paper>
                
            </Grid>

            <Grid item xs={12} md={12} lg={4} className={classes.form}>
                <AddBentoPage />
            </Grid>
            
            <Grid item xs={12} md={12} lg={8}>
                <BentoList 
                header={"My Bento"}
                />
            </Grid>
        </Grid>
        </div>
    );
  }
