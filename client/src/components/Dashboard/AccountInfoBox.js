import React, {useEffect} from 'react';
import FormController from '../shared/FormController';
import ButtonLink from '../shared/ButtonLink';
import Favorite from './Favorite';
import Mybento from './myBento';
import { Paper,Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/Profile';
import { getBentoById } from '../../actions/Bento';
import { withStyles } from '@material-ui/core/styles';
import AccountInfo from './AccountInfo'

const styles = () => ({
    root: {
        height: '100%'
    }
  });

const AccountInfoBox = (props) => {

    const {
      classes,
      bento: { bentos },
      auth: { user },
      profile: { profile, loading },
      deleteAccount
    } = props;  

    const userBentos = bentos.filter(bento => bento.user === user._id)

    const DashboardSection = () => (
      <div className={classes.root}>
        {/* <Typography variant="h3">Dashboard</Typography> */}
          <Typography variant="body1" gutterBottom>Welcome, {user && user.name}</Typography>
          <div>
            <span>{user && user.email}</span>
        </div>
      </div>

    )

    const FavoritesSection = () => (
      <div className={classes.root}>
        {/* <Typography variant="h3">Favorite</Typography> */}
        {profile.favorites.length === 0 ? (
          <Typography variant="body1" gutterBottom> No bento</Typography>
        ) : (
          profile.favorites &&
          profile.favorites.map(favorite => {
            return (
              <Paper elevation={2} key={favorite._id}>
                <Favorite key={favorite._id} bento={favorite} />
              </Paper>
            );
          })
       )}
    </div>
    )

    const MyBentoSection = () => (
      <div className={classes.root}>
        {/* <Typography variant="h3">My Bentos</Typography> */}
        {userBentos.length === 0 ? (
          <Typography variant="body1" gutterBottom> No bento </Typography>
        ) : (
          userBentos &&
          userBentos.map(bento => {
            return (
              <Paper elevation={2} key={bento._id}>
                <Mybento key={bento._id} bento={bento} />
              </Paper>
            );
          })
        )}
    </div>
    )

    const DashboardAction = () => (
      <div className={classes.root}>
        <ButtonLink link="/edit-profile" dialogue="Edit Profile"/>
        <ButtonLink 
        dialogue="Delete Account"
        onClick={() => deleteAccount()}
        />
      </div>
    )

    return(
      <Paper elevation={5} className={classes.root}>
       <AccountInfo 
      DashboardSection = {DashboardSection}
      FavoritesSection = {FavoritesSection}
      MyBentoSection={MyBentoSection}
      bottomRightSlot={DashboardAction}/>
      </Paper>
    
    )
  }

  AccountInfoBox.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    getBentoById: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
    bento: state.bento
  });
  
  export default connect(mapStateToProps, {
    deleteAccount,
    getBentoById
  })(withStyles(styles)(AccountInfoBox));