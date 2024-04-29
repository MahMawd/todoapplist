import '../App.css';
import { Navbar } from './Navbar';
import { TodoWrapperLocalStorage } from './TodoWrapperLocalStorage';

export const MainPage = () => {
    return (
          <div className="App">
            <Navbar />
            <div className="main">
              <TodoWrapperLocalStorage />
            </div>
          </div>
      );
}
