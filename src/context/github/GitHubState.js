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

const production = process.env.NODE_ENV === 'production';
const CLIENT_ID = production
  ? process.env.GITHUB_CLIENT_ID
  : process.env.REACT_APP_GITHUB_CLIENT_ID;
const CLIENT_SECRET = production
  ? process.env.GITHUB_CLIENT_SECRET
  : process.env.REACT_APP_GITHUB_CLIENT_SECRET;

const GitHubState = props => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false
  };
  const [state, dispatch] = useReducer(GitHubReducer, initialState);
  const { user, users, repos, loading } = state;

  // sets the loading value to true
  const setLoading = () => dispatch({ type: SET_LOADING });

  // sets the users array to an empty value
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // api call to search for users based on the given textbox value
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  // api call to fetch user data for a given login name
  const getUserByLogin = async login => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    dispatch({ type: GET_USER_BY_LOGIN, payload: res.data });
  };

  // api call to fetch 5 user repos for a given login name
  const getUserReposByLogin = async login => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
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
