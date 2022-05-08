import logo from './logo.svg';
import './App.css';
import MyNewComponent from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
      <MyNewComponent someText = {"Hello World!"}/>
      <MyNewComponent someText = {"I am reusing this component"}/>
    </div>
  );
}

export default App;
