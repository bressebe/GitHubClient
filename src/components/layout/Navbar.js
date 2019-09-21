import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar navbar-expand-sm bg-primary'>
      <div className='container'>
        <h1>
          <i className={icon}></i> {title}
        </h1>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to='/' className='nav-link text-white'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link text-white'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  icon: 'fab fa-github',
  title: 'Github Client'
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Navbar;
