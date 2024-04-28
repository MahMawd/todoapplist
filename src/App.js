import './App.css';
import { Navbar } from './components/Navbar';
//import { TodoWrapper } from './components/TodoWrapper';
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