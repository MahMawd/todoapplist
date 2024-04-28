import React, { useRef } from "react";
//import Home from "./Home";
//import './SignInSignUp.css';

function SignInSignupwithLocalStorage() {
  const name = useRef();
  const email= useRef();
  const password = useRef();
  const handleClick = () => {
    console.log(name.current.value,email.current.value,password.current.value);
  };
  return (
    <div>
      <div className="container">
        <div className="input_space">
          <input placeholder="Name" type='text' ref={name} />
        </div>
        <div className="input_space">
          <input placeholder="Email" type='text' ref={email} />
        </div>
        <div className="input_space">
          <input placeholder="Password" type='password' ref={password} />
        </div>
        <button onclick = {handleClick}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignInSignupwithLocalStorage;

