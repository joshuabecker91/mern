import './App.css';
import DisplayAll from './components/DisplayAll';
import AuthorForm from './components/AuthorForm';
import EditAuthor from './components/EditAuthor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<DisplayAll/>} path="/" />
          <Route element={<AuthorForm/>} path="/new" />
          <Route element={<EditAuthor/>} path="/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
