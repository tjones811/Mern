import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="App container">
      <h1>ToDo List! *Also known as the "I'll defenitly do this not today" list</h1>
      <ToDo></ToDo>
    </div>
  );
}

export default App;
