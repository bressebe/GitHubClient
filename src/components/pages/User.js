import React, { Fragment, useContext, useEffect } from 'react';
import RepoCards from '../cards/RepoCards';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import GitHubContext from '../../context/github/GitHubContext';

const User = ({ match }) => {
  const {
    loading,
    user,
    repos,
    getUserByLogin,
    getUserReposByLogin
  } = useContext(GitHubContext);

  useEffect(() => {
    getUserByLogin(match.params.login);
    getUserReposByLogin(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    login,
    company,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to='/' className='btn btn-dark btn-sm my-3 mr-3'>
          Back
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success'></i>
        ) : (
          <i className='fas fa-times-circle text-danger'></i>
        )}
        <div className='card text-center'>
          <div className='row'>
            <div className='col'>
              <img
                src={avatar_url}
                alt=''
                className='rounded-circle mx-auto my-3'
                style={{ width: '240px' }}
              />
              <h1>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div className='col m-3'>
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a href={html_url} className='btn btn-dark mb-3'>
                Visit GitHub Profile
              </a>
              <ul className='list-unstyled'>
                <li>
                  {login && (
                    <Fragment>
                      <strong>Username: </strong>
                      {login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company: </strong>
                      {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong>
                      {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <RepoCards repos={repos} />
        <div className='text-center'>
          <div className='badge badge-primary mx-2'>Followers: {followers}</div>
          <div className='badge badge-danger mx-2'>Following: {following}</div>
          <div className='badge badge-success mx-2'>
            Public Repos: {public_repos}
          </div>
          <div className='badge badge-info mx-2'>
            Public Gists: {public_gists}
          </div>
        </div>
      </Fragment>
    );
  }
};

export default User;
