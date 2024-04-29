import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from '../signinup/SignOut';

export const Navbar = () => {
  return (
    <div className='sidenav'>
      <ul>
        <li><Link className='link' to='/tasks'>Tasks</Link></li>
        <li><Link className='link' to='/about'>About us</Link></li>
        <li><Link className='link' to='/signout'>Sign out</Link></li>
      </ul>
    </div>
  );
};