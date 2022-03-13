import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Todos/>
      <TodoList/>
    </div>
  );
}

export default App;
