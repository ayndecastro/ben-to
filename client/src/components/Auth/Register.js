import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
//connect is a package that lets react work with redux
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/Auth';
import PropTypes from 'prop-types';
import FormController from '../shared/FormController';
import TextField from '../shared/TextField';
import ButtonLink from '../shared/ButtonLink'

//destructure setAlert from props. instead of using props.setAlert
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      //setAlert containing the message and the alertType required for dispath in action/alert.js
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  //redirect if isAuthenticated = true
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  const RegisterForm = () => (
    <Fragment>
    <h1>Create An Account</h1>
    <form action='create-profile.html' onSubmit={e => onSubmit(e)}>
      <div>
        <TextField
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={e => onChange(e)}
          required
        />
      </div>
      <div style={{
        margin: '10px 0'
      }}>
        <TextField
          type='email'
          placeholder='Email Address'
          name='email'
          value={email}
          onChange={e => onChange(e)}
          required
        />
        {/*<small className='form-text'>
          This site uses Gravatar so if you want a profile image, use a
          Gravatar email
        </small>*/}
      </div>
      <div style={{
        margin: '10px 0'
      }}>
        <TextField
          type='password'
          placeholder='Password'
          name='password'
          minLength='6'
          value={password}
          onChange={e => onChange(e)}
        />
      </div>
      <div style={{
        margin: '10px 0'
      }}>
        <TextField
          type='password'
          placeholder='Confirm Password'
          name='password2'
          minLength='6'
          value={password2}
          onChange={e => onChange(e)}
        />
      </div>
      <div
        style={{
          marginLeft: 'auto',
          width: 'fit-content',
          marginTop: '10px',
          marginRight: '5px'}}>
        <input 
        type='submit' 
        value='Register' 
        style={{
          fontSize: '14px',
          width: 'fit-content',
          background: '#212121',
          color: 'white',
          padding: '6px 8px',
          borderRadius: '4px',
          textTransform: 'uppercase',
          minWidth: '64px',
          cursor: 'pointer'
        }}/>
        </div>
    </form>
  </Fragment>
  )

  const BottomLeftSlot = () => (
    <p>
      Already have an account? 
    </p>
  )

  const BottomRightSlot = () => (
    <ButtonLink dialogue="Sign In" link="/login"/>
  )

  return (
      <div style={{
        maxWidth: '500px',
        margin: 'auto',
        paddingTop: '20px'
      }}>
        <FormController 
          formSlot={RegisterForm}
          bottomLeftSlot={BottomLeftSlot}
          bottomRightSlot={BottomRightSlot}
        />
      </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

//we have to export connect with the setAlert action in order to use it which is available within props
export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
