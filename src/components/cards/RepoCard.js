import React from 'react';
import PropTypes from 'prop-types';

const RepoCard = ({ repo }) => {
  return (
    <div className='card text-center my-2 pl-2'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

RepoCard.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoCard;
