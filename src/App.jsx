import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <TodoList/> */}
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/todos' element={<TodoList/>}/>

      </Routes>
    </div>
  );
}

export default App;
