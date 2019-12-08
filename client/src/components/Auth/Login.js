import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/Auth';
import FormController from '../shared/FormController';
import ButtonLink from '../shared/ButtonLink';
import TextField from '../shared/TextField'

const Login = ({ isAuthenticated, login }) => {
  const [formData, setFormData] = useState({
    emai: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  const FormSlot = () => (
    <div>
      <h1>Sign In</h1>
      <form action='create-profile.html' onSubmit={e => onSubmit(e)}>
        <div>
          <TextField
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
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

        <div
        style={{
          marginLeft: 'auto',
          width: 'fit-content',
          marginTop: '10px',
          marginRight: '5px'}}>
        <input type='submit' value='Login'
        style={{
          fontSize: '14px',
          width: 'fit-content',
          background: '#212121',
          color: 'white',
          padding: '6px 8px',
          borderRadius: '4px',
          textTransform: 'uppercase',
          minWidth: '64px'
        }}/>
        </div>
      </form>
    </div>
  )

  const BottomRightSlot = () => (
        <ButtonLink dialogue="Sign Up" link="/register" /> 
  )

  const BottomLeftSlot = () => (
      <p>
        Don't have an account?
      </p>
  )

  return (
    <div style={{
      maxWidth: '500px',
      margin: 'auto',
      paddingTop: '20px'
    }}>
    <FormController 
      formSlot={FormSlot}
      bottomLeftSlot={BottomLeftSlot}
      bottomRightSlot={BottomRightSlot}
    />
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
