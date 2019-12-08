import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/Profile';
import FormController from '../shared/FormController';
import TextField from '../shared/TextField';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ButtonLink from '../shared/ButtonLink';

const CreateProfile = ({ createProfile, history }) => {

  const useStyles = makeStyles({
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'space-between'
    },
    primaryButton: {
      marginRight: '5px',
      fontSize: '14px',
      width: 'fit-content',
      background: '#212121',
      color: 'white',

      '&active:': {
        color: 'white'
      }
    },
    formControl: {
      marginBottom: '10px'
    },
    formBio: {
      marginBottom: '10px'
    },
    formOptional: {
      paddingBottom: '10px'
    },
    mediaLinks: {
      marginTop: '10px'
    },
    leftSlot: {
      fontSize: '15px'
    }
  })
  const [formData, setFormData] = useState({
    status: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    fieldofstudy: '',
    department: '',
    school: ''
  });

  const [displaySocialInputs, toggleSocialInput] = useState(false);

  const {
    status,
    bio,
    twitter,
    facebook,
    youtube,
    instagram,
    fieldofstudy,
    department,
    school
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  const classes = useStyles();

  const FormSlot = () => (
      <div className={classes.formSlot}>
        <h1>Create Your Profile</h1>
      <p>
        <i /> Let's get some information to make your profile stand out
      </p>
      <form onSubmit={e => onSubmit(e)}>
        <div>

          <FormControl variant="outlined" className={classes.formControl}>
            <span>
            Give us an idea of where you are at in your career
            </span>
            <Select
              name='status'
              value={status}
              onChange={e => onChange(e)}
              autoWidth
              required
              margin="dense"
                style= {{
                  fontSize: '13px',
                  marginTop: '5px',
                  padding: '5px'
                }}
              placeholder="Select Status"
            >
               <MenuItem disabled value="">
                <em style={{fontSize: '13px'}}>Select Status</em>
              </MenuItem>
              <MenuItem style={{fontSize: '13px'}} value='Student'>Student</MenuItem>
              <MenuItem style={{fontSize: '13px'}} value='Instructor'>Instructor or Teacher</MenuItem>
              <MenuItem style={{fontSize: '13px'}} value="Teacher's assistant">Teacher's assistant</MenuItem>
              <MenuItem style={{fontSize: '13px'}} value='Intern'>Intern</MenuItem>
              <MenuItem style={{fontSize: '13px'}} value='Merchant'>Merchant</MenuItem>
              <MenuItem style={{fontSize: '13px'}} value='Other'>Other</MenuItem>
            </Select>
        </FormControl>

          <small></small>
        </div>
        <div className={classes.formBio}>
          <small>Tell us a little about yourself</small>
          <TextField
            placeholder='A short bio of yourself'
            name='bio'
            multiline
            shrink
            value={bio}
            onChange={e => onChange(e)}
          />
        </div>

        <div className={classes.formOptional}>
          <small>Optional&nbsp;</small>
          
        </div>
        <Button
            onClick={() => toggleSocialInput(!displaySocialInputs)}
            type='button'
            variant="contained"
            color="secondary"
            size="large"
            className={classes.primaryButton}
          >
            Add Social Network Links
          </Button>
        {displaySocialInputs && (
          <Fragment>
            <div className={classes.mediaLinks}>
              <i />
              <TextField
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
                
              />
            </div>

            <div className={classes.mediaLinks}>
              <i />
              <TextField
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
                
              />
            </div>

            <div className={classes.mediaLinks}>
              <i />
              <TextField
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
                
              />
            </div>

            <div className={classes.mediaLinks}>
              <i />
              <TextField
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
                
              />
            </div>
          </Fragment>
        )}

        
      </form>
      </div>
  )

  const BottomLeftSlot = () => (
    <React.Fragment>
            <p className={classes.leftSlot}>
              {' '}
              By clicking Next, you agree to our&nbsp;
              
                Terms of Use
              {' '}
              and&nbsp;
              
                Privacy Policies
              
            </p>
          </React.Fragment>
  )

  const BottomRightSlot = () => (
    <div className={classes.buttonContainer}>

    <ButtonLink dialogue="Back" link="/dashboard"/>
    <ButtonLink dialogue="Submit"  onClick={e=>onSubmit(e)}/>
    
    </div>
  )
  return (
    <div className={classes.formContainer}>
      <FormController
      formSlot={FormSlot}
      bottomRightSlot={BottomRightSlot}
      bottomLeftSlot={BottomLeftSlot}
      />
    </div>
    
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
