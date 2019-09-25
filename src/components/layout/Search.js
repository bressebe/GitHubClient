import React, { useState, useContext } from 'react';

import GitHubContext from '../../context/github/GitHubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
  const { users, clearUsers, searchUsers } = useContext(GitHubContext);
  const { showAlert } = useContext(AlertContext);

  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      showAlert('Search field cannot be empty', 'danger');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='row my-3'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
          className='col mx-3'
        />
        <input type='submit' value='Search' className='btn btn-dark col mx-3' />
      </form>
      {users.length > 0 && (
        <div className='row mb-3'>
          <button className='btn btn-light col mx-3' onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
