import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import Spinner from '../Layout/Spinner';
import ButtonLink from '../shared/ButtonLink'
import { getProfileById } from '../../actions/Profile';
import { getBentos } from '../../actions/Bento';
import ProfileAbout from './profileAbout';
import ProfileFavorites from './profileFavorites';
import ProfileBentos from './profileBentos';

const Profile = ({
  getProfileById,
  getBentos,
  profile: { profile, loading },
  bento: { bentos },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
    getBentos();
  }, [getProfileById, match.params.id, getBentos]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {' '}
          <Link to='/profiles' className='btn btn-light'>
            Back to Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <ButtonLink link='/edit-profile' dialogue="Edit Profile"/>
            )}
          <div>
            <ProfileAbout profile={profile} />
            <div>
              <h1>{profile.user.name}'s Favorite</h1>
              {profile.favorites.length === 0 ? (
                <p> No bento </p>
              ) : (
                profile.favorites &&
                profile.favorites.map(favorite => {
                  return (
                    <Paper elevation={2} key={favorite._id}>
                      <ProfileFavorites key={favorite._id} bento={favorite} />
                    </Paper>
                  );
                })
              )}
            </div>
            <div>
              <h1>{profile.user.name}'s Bentos</h1>
              {bentos.length === 0 ? (
                <p> No bento </p>
              ) : (
                bentos &&
                bentos.map(bento => {
                  return (
                    <Paper elevation={2} key={bento._id}>
                      <ProfileBentos
                        key={bento._id}
                        profile={profile}
                        bento={bento}
                      />
                    </Paper>
                  );
                })
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  getBentos: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  bento: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  bento: state.bento
});

export default connect(mapStateToProps, {
  getProfileById,
  getBentos
})(Profile);
