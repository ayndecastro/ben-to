import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  root: {
      height: 'fit-content',
      background: '#fafafa',
      color: 'black',
      padding: '10px'
  },
  container: {
  },
  avatar: {
      height: '100%',
      width: '100%',
      borderRadius: 0,
  },
  avatarContainer: {
    //   border: '1px solid red',
  },
  nameContainer: {
    width: '80%',
    margin: '0 auto',
    marginTop: '10px'
  },
  name: {
    color: 'black',
    fontWeight: '500',
    fontSize: '20px'
  },
  email: {
    color: 'black',
    fontWeight: '500',
    fontSize: '16px',
    wordWrap: 'break-word'
  }
  
});

const PlayerStatBox = props => {
  const  { classes, user, profile } = props;
  const { name, email, avatar } = user;

  console.log(props)
  return (
    <Paper elevation={5} square className={classes.root}>
        <Grid container spacing={2} className={classes.container}>
            <Grid item xs={3} sm={3} md={12} lg={12}>
                <Box className={classes.avatarContainer}>
                    <Avatar alt={name} src={avatar} className={classes.avatar}/>
                </ Box>
            </Grid>
            <Grid item xs={9} sm={9} md={12} lg={12} className={classes.nameContainer}> 
                <Typography variant="h5" className={classes.name}>
                    {name}, <small>{profile.status}</small>
                </Typography>
                <Typography variant="h5" className={classes.email}>
                    {email}
                </Typography>
            </Grid>
        </Grid>
    </Paper>    
  );
};

export default withStyles(styles)(PlayerStatBox);