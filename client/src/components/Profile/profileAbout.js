import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    social,
    location,
    user: { name, avatar }
  }
}) => (
  <div>
    <div>
      <img class='round-img my-1' src={avatar} alt='' />
      <h1>{name}</h1>
      <p></p>
      <p>{location && <span>{location}</span>}</p>
      <div>
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i class='fab fa-twitter fa-2x' />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i class='fab fa-facebook fa-2x' />
            facebook
          </a>
        )}

        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i class='fab fa-youtube' /> youtube
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i class='fab fa-instagram' /> instagram
          </a>
        )}
      </div>
    </div>

    {bio && (
      <Fragment>
        <h2>{name.trim().split(' ')[0]}'s Bio</h2>
        <p>{bio}</p>
        <div />
      </Fragment>
    )}
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
