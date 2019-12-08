import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_BENTOS,
  GET_BENTO,
  ADD_BENTO,
  UPDATE_BENTO,
  UPDATE_LIKES,
  DELETE_BENTO,
  BENTO_ERROR,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './types';

//GET BENTOS
export const getBentos = () => async dispatch => {
  try {
    const res = await axios.get('/api/bento');

    dispatch({
      type: GET_BENTOS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BENTO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//GET SINGLE BENTO
export const getBento = id => async dispatch => {
  try {
    const res = await axios.get(`/api/bento/${id}`);

    dispatch({
      type: GET_BENTO,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: BENTO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//GET BENTO BY USER ID
export const getBentoById = _id => async dispatch => {
  try {
    const res = await axios.get(`/api/bento/`);

    const data = res.data.filter(bento => (
      bento._id === _id
    ));
      console.log(data)
      
    dispatch({
      type: GET_BENTO,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: BENTO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//ADD SINGLE BENTO
export const addBento = FormData => async dispatch => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(`/api/bento`, FormData, config);

    dispatch({
      type: ADD_BENTO,
      payload: res.data
    });

    dispatch(setAlert('Bento Created', 'success'));
  } catch (err) {
    dispatch({
      type: BENTO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//EDIT BENTO
export const editBento = (id, FormData, history) => async dispatch => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(`/api/bento/${id}`, FormData, config);

    dispatch({
      type: UPDATE_BENTO,
      payload: res.data
    });

    dispatch(setAlert('Bento Edited', 'success'));
  } catch (err) {
    dispatch({
      type: BENTO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//DELETE BENTO
export const deleteBento = id => async dispatch => {
  try {
    await axios.delete(`/api/bento/${id}`);
    dispatch({
      type: DELETE_BENTO,
      payload: id
    });

    dispatch(setAlert('Bento Removed', 'success'));
  } catch (err) {
    dispatch({
      type: BENTO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
