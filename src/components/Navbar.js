import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='sidenav'>
      <ul>
        <li><Link className='link' to='/'>Home</Link></li>
        <li><Link className='link' to='/about'>About us</Link></li> {/* Changed the link to '/about' */}
        <li><Link className='link' to='/signin'>Sign in</Link></li>
        <li><Link className='link' to='/signup'>Sign up</Link></li> {/* Changed the link to '/signup' */}
      </ul>
    </div>
  );
};