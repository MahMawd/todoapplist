import './App.css';
import { Navbar } from './components/Navbar';
import { AboutUs } from './components/AboutUs';
import { TodoWrapperLocalStorage } from './components/TodoWrapperLocalStorage';
import { SignInWithLocalStorage } from './signinup/SigninwithLocalStorage';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import { SignUpWithLocalStorage } from './signinup/SignupwithLocalStorage';
//import { SignOut } from './signinup/SignOut';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<TodoWrapperLocalStorage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/signin" element={<SignInWithLocalStorage />} />
            <Route path="/signup" element={<SignUpWithLocalStorage/>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;