import logo from './logo.svg';
import './App.css';
import Coins from './components/Coins';

function App() {
  return (
    <div className="App container">
      <h1>Crypto api. Check your prices here.</h1>
      <Coins></Coins>
    </div>
  );
}

export default App;
