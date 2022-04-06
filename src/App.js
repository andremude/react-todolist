import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className='main-list'>
        <h1>To Do List</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
