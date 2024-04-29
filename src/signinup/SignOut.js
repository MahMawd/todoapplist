import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = ({ onSignOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    onSignOut();

    navigate('/');
  };

  return (
    <div id='signout'>
      <button onClick={handleSignOut} id='SignOut'>Sign Out</button>
    </div>
  );
};

export default SignOut;
