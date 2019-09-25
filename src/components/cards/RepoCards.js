import React from 'react';
import PropTypes from 'prop-types';

import RepoCard from './RepoCard';

const RepoCards = ({ repos }) => {
  return repos.map(repo => <RepoCard key={repo.id} repo={repo} />);
};

RepoCards.propTypes = {
  repos: PropTypes.array.isRequired
};

export default RepoCards;
