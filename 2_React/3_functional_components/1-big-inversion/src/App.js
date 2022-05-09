import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
     <h1>People Below!</h1>
        <PersonCard lastName = {"Doe"} firstName = {"Jane"} age = {45} 
          hairColor = {"black"}>

            <p>This person is an astronaut.</p>
        </PersonCard>

        <PersonCard lastName = {"Smith"} firstName = {"John"} age = {88} 
          hairColor = {"brown"}>

            <p>This person is unemployed.</p>
        </PersonCard>

        <PersonCard lastName = {"Fillmore"} firstName = {"Millard"} age = {50} 
          hairColor = {"red"}>
            <p>This person is not allowed to work on US territory 
              for questionable reasons</p>
        </PersonCard>

        <PersonCard lastName = {"Smith"} firstName = {"Maria"} age = {62} 
          hairColor = {"orange"}>

            <p>This person makes an unnecessary amount of money</p>
        </PersonCard>
    </div>
  );
}

export default App;
