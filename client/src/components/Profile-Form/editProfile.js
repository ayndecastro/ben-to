import React, { useState, Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/Profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    status: '',
    location: '',
    bio: '',
    twitter: '',
    facebook: '',
    youtube: '',
    instagram: '',
    fieldofstudy: '',
    department: '',
    school: ''
  });

  const [displaySocialInputs, toggleSocialInput] = useState(false);
  const [displayStatusInfoInputs, toggleStatusInfoInput] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      bio: loading || !profile.bio ? '' : profile.bio,
      status: loading || !profile.status ? '' : profile.status,
      fieldofstudy:
        loading || !profile.statusinfo.fieldofstudy
          ? ''
          : profile.statusinfo.fieldofstudy,
      department:
        loading || !profile.statusinfo.department
          ? ''
          : profile.statusinfo.department,
      school:
        loading || !profile.statusinfo.school ? '' : profile.statusinfo.school,
      twitter: loading || !profile.social.twitter ? '' : profile.social.twitter,
      facebook:
        loading || !profile.social.facebook ? '' : profile.social.facebook,
      youtube: loading || !profile.social.youtube ? '' : profile.social.youtube,
      instagram:
        loading || !profile.social.instagram ? '' : profile.social.instagram
    });
  }, [loading, getCurrentProfile]);
  const {
    bio,
    status,
    twitter,
    facebook,
    youtube,
    instagram,
    school,
    fieldofstudy,
    department
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1>Edit Your Profile</h1>
      <p>
        <i /> Let's edit some information to make your profile stand out
      </p>
      <small>* = required field</small>
      <form onSubmit={e => onSubmit(e)}>
        <div>
          <select name='status' value={status} onChange={e => onChange(e)}>
            <option value='0'>* Select Status</option>
            <option value='Student'>Student</option>
            <option value='Instructor'>Instructor or Teacher</option>
            <option value="Teacher's assistant">Teacher's assistant</option>
            <option value='Intern'>Intern</option>
            <option value='Merchant'>Merchant</option>
            <option value='Other'>Other</option>
          </select>
          <small>Give us an idea of where you are at in your career</small>
        </div>
        <div>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          />
          <small>Tell us a little about yourself</small>
        </div>

        <div>
          <button
            onClick={() => toggleSocialInput(!displaySocialInputs)}
            type='button'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div>
              <i />
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div>
              <i />
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div>
              <i />
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div>
              <i />
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        {profile.status === 'Student' && (
          <div>
            <button
              onClick={() => toggleStatusInfoInput(!displayStatusInfoInputs)}
              type='button'
            >
              Add Student Status Info
            </button>
            <span>Optional</span>
          </div>
        )}

        {profile.status === 'Instructor' && (
          <div>
            <button
              onClick={() => toggleStatusInfoInput(!displayStatusInfoInputs)}
              type='button'
            >
              Add Instructor Status Info
            </button>
            <span>Optional</span>
          </div>
        )}
        {displayStatusInfoInputs && (
          <Fragment>
            <div>
              <i />
              <input
                type='text'
                placeholder='school'
                name='school'
                value={school}
                onChange={e => onChange(e)}
              />
            </div>

            <div>
              <i />
              <input
                type='text'
                placeholder='field of study'
                name='fieldofstudy'
                value={fieldofstudy}
                onChange={e => onChange(e)}
              />
            </div>

            <div>
              <i />
              <input
                type='text'
                placeholder='Department'
                name='department'
                value={department}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' />
        <Link to='/dashboard'> Go Back</Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
