import './App.css';
import Home from './components/Home';
import Params from './components/Params';
import { BrowserRouter, Routes, Route } from "react-router-dom";

{/* (params) can be destructured from the useParam hook and used as variables, just like values destructured from props! */}

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route element={<Home />} path="/home"/>
            <Route element={<Params />} path="/:word" />
            <Route element={<Params />} path="/:word/:color/:bgCol" />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
