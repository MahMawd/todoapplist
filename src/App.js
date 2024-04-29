import { useState } from 'react';
import './App.css';
import './aboutus.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import { SignInWithLocalStorage } from './signinup/SigninwithLocalStorage';
import { SignUpWithLocalStorage } from './signinup/SignupwithLocalStorage';
import { MainPage } from './components/MainPage';
import { TodoWrapperLocalStorage } from './components/TodoWrapperLocalStorage';
import { Navbar } from './components/Navbar';
import AboutUs from './components/AboutUs';
import SignOut from './signinup/SignOut';

function App() {
  const [showComponent1, setShowComponent1] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };
  const toggleComponent = () => {
    setShowComponent1(prevState => !prevState);
  };

  return (
    <Router>
      <div className="Auth">
      {isAuthenticated && <Navbar/>}
        {!isAuthenticated && <button onClick={toggleComponent} id="Switch">{showComponent1 ? "Sign Up" : "Sign In"}</button>}
        <Routes>
          <Route path="/" element={showComponent1 ? <SignInWithLocalStorage onSignIn={handleSignIn} /> : <SignUpWithLocalStorage />}/>
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/signout" element={<SignOut onSignOut={handleSignOut} />} />
          <Route path="tasks" element={<TodoWrapperLocalStorage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
