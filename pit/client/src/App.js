import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} hair={"Black"}/>
      <PersonCard lastName={"Smith"} firstName={"Sam"} age={31} hair={"Brown"}/>
      <PersonCard lastName={"Wade"} firstName={"Tom"} age={40} hair={"Blonde"}/>
      <PersonCard lastName={"Smith"} firstName={"William"} age={50} hair={"White"}/>
    </div>
  );
}

export default App;
