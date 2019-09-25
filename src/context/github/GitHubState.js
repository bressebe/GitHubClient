import React, { useReducer } from 'react';
import axios from 'axios';
import GitHubContext from './GitHubContext';
import GitHubReducer from './GitHubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  GET_USER_BY_LOGIN,
  GET_USER_REPOS_BY_LOGIN,
  CLEAR_USERS
} from '../types';

const GitHubState = props => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);
  const { user, users, repos, loading } = state;

  const setLoading = () => dispatch({ type: SET_LOADING });

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  const getUserByLogin = async login => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: GET_USER_BY_LOGIN, payload: res.data });
  };

  const getUserReposByLogin = async login => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: GET_USER_REPOS_BY_LOGIN, payload: res.data });
  };

  return (
    <GitHubContext.Provider
      value={{
        user,
        users,
        repos,
        loading,
        clearUsers,
        searchUsers,
        getUserByLogin,
        getUserReposByLogin
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GitHubState;
