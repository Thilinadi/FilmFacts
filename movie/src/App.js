import './App.css';
import MovieList from './MovieList';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MovieList/>

      
      </BrowserRouter>

      

    </div>
  );
}

export default App;
