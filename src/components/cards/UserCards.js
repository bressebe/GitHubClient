import React, { useContext } from 'react';

import UserCard from './UserCard';
import Spinner from '../layout/Spinner';
import GitHubContext from '../../context/github/GitHubContext';

const UserCards = () => {
  const { users, loading } = useContext(GitHubContext);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userCardsStyle}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userCardsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default UserCards;
