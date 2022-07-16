import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Sam"} lastName={"Smith"} age={67} hairColor={"brown"} />
      <PersonCard firstName={"Will"} lastName={"Smith"} age={37} hairColor={"black"} />
      <PersonCard firstName={"Bill"} lastName={"Smith"} age={47} hairColor={"blonde"} />
      <PersonCard firstName={"Rob"} lastName={"Justice"} age={27} hairColor={"black"} />
    </div>
  );
}

export default App;