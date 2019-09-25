import {
  SET_LOADING,
  CLEAR_USERS,
  SEARCH_USERS,
  GET_USER_BY_LOGIN,
  GET_USER_REPOS_BY_LOGIN
} from '../types';

const GitHubReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case CLEAR_USERS:
      return { ...state, users: [], loading: false };
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };
    case GET_USER_BY_LOGIN:
      return { ...state, user: action.payload, loading: false };
    case GET_USER_REPOS_BY_LOGIN:
      return { ...state, repos: action.payload, loading: false };
    default:
      return state;
  }
};

export default GitHubReducer;
