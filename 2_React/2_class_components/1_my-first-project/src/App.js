import logo from './logo.svg';
import './App.css';
import MyNewComponent from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
      <MyNewComponent someText = {"Hello World!"}></MyNewComponent>
      <MyNewComponent someText = {"I am reusing this component"}></MyNewComponent>
      
      <MyNewComponent header = {"Header Prop"}>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
      </MyNewComponent>

      <button onClick = { () => alert("This button has been clicked!")}>Click Me</button>
    </div>
  );
}

export default App;
