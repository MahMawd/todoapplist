import './App.css';
import { Navbar } from './components/Navbar';
import { AboutUs } from './components/AboutUs';
import { TodoWrapperLocalStorage } from './components/TodoWrapperLocalStorage';
import { SignInWithLocalStorage } from './signinup/SigninwithLocalStorage';

import { SignUpWithLocalStorage } from './signinup/SignupwithLocalStorage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<TodoWrapperLocalStorage />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;