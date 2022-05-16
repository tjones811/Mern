import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import PokemonWithAxiosAndUseEffect from './components/PokemonWithAxiosAndUseEffect';

function App() {
  return (
    <div className="App">
      <h1>Want to see all the Pokemon currently in rotation? Click the button below!</h1>
      {/* <Pokemon></Pokemon> */}
      <PokemonWithAxiosAndUseEffect></PokemonWithAxiosAndUseEffect>
    </div>
  );
}

export default App;
