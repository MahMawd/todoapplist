import './App.css';
import { Navbar } from './components/Navbar';
import { AboutUs } from './components/AboutUs';
import { TodoWrapperLocalStorage } from './components/TodoWrapperLocalStorage';
import { SignInWithLocalStorage } from './signinup/SigninwithLocalStorage';

import { SignUpWithLocalStorage } from './signinup/SignupwithLocalStorage';

function App() {
  return (
    <div className="App">
    <Navbar />
    <br/><br/><br/><br/>
    <SignUpWithLocalStorage />
    <SignInWithLocalStorage />
    
    </div>
    
  );
}

export default App;