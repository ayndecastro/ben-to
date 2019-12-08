import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/Profile';
import { getBentos } from '../../actions/Bento';
import { makeStyles } from '@material-ui/styles';
import Favorite from './Favorite';
import Mybento from './myBento';
import Spinner from '../Layout/Spinner';
import NoAccountForm from './NoAccountForm';
import AccountPage from './AccountPage'

const Dashboard = ({
  getCurrentProfile,
  getBentos,
  bento: { bentos },
  auth: { user },
  profile: { profile, loading },
  deleteAccount
}) => {
  useEffect(() => {
    getCurrentProfile();
    getBentos();
  }, [getCurrentProfile, getBentos]);

  
  return ( loading && profile === null ? 
        (
        <Spinner />
        ) : 
        (profile !== null ? 
          (
            <AccountPage 
            user={user}
            profile={profile}
            />
          ) : 
          (
          <NoAccountForm 
          user={user}
          />
          )
          ))
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getBentos: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  bento: state.bento
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  getBentos
})(Dashboard);
