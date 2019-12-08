import {
  GET_BENTOS,
  GET_BENTO,
  UPDATE_LIKES,
  BENTO_ERROR,
  UPDATE_BENTO,
  ADD_BENTO,
  DELETE_BENTO,
  ADD_COMMENT,
  REMOVE_COMMENT
} from '../actions/types';
const initialState = {
  bentos: [],
  bento: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BENTOS:
      return {
        ...state,
        bentos: payload,
        loading: false
      };
    case GET_BENTO:
      return {
        ...state,
        bento: payload,
        loading: false
      };
    case ADD_BENTO:
    case UPDATE_BENTO:
      return {
        ...state,
        bentos: [payload, ...state.bentos],
        loading: false
      };
    case DELETE_BENTO:
      return {
        ...state,
        bentos: state.bentos.filter(bento => bento._id !== payload),
        loading: false
      };
    case BENTO_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        bentos: state.bentos.map(bento =>
          bento._id === payload.id ? { ...bento, likes: payload.likes } : bento
        ),
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        bento: { ...state.bento, comments: payload },
        loading: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        bento: {
          ...state.bento,
          comment: state.bento.comments.filter(
            comment => comment._id !== payload
          )
        },
        loading: false
      };
    default:
      return {
        ...state
      };
  }
}
