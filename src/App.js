
import './App.css';
import { Navbar } from './components/Navbar';
//import { TodoWrapper } from './components/TodoWrapper';
import { TodoWrapperLocalStorage } from './components/TodoWrapperLocalStorage';

function App() {
  return (
    <div className="App">
      <Navbar />
    <TodoWrapperLocalStorage />
    
    </div>
    
  );
}

export default App;
