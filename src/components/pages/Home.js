import React, { Fragment } from 'react';

import Search from '../layout/Search';
import UserCards from '../cards/UserCards';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <UserCards />
    </Fragment>
  );
};

export default Home;
