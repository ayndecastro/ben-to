import React from 'react';
import FormController from '../shared/FormController';
import ButtonLink from '../shared/ButtonLink';
import Favorite from './Favorite';
import Mybento from './myBento';
import { Paper,Grid } from '@material-ui/core';
import ProfileBox from './ProfileBox';
import { withStyles } from '@material-ui/core/styles';
import AccountInfoBox from './AccountInfoBox'

const styles = () => ({
    root: {
        maxWidth: '80%',
        margin: '0 auto',
        height: 'fit-content',
    }
  });

const AccountPage = (props) => {

    const { classes, user, profile} = props;

    return (
    <Grid container spacing={4}
      className={classes.root}>
        <Grid item xs={12} md={4} lg={4} className={classes.avatarBox}>
                {user && <ProfileBox 
                user={user}
                profile={profile}
                />}
        </Grid>
        <Grid item xs={12} md={8} lg={8} className={classes.accountInfoBox}>
                <AccountInfoBox />
        </Grid>
  </Grid>
)}


export default withStyles(styles)(AccountPage)