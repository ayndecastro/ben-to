import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import bento from './bento';

export default combineReducers({ auth, profile, bento });
