import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // axios.get('http://localhost:3005/movies')
       axios.get('https://d235-2402-4000-2382-41dd-117-9d19-91a-9dce.in.ngrok.io/movies')
      .then(res => {
        setMovies(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>FilmFacts</h1>
      <input type="text" placeholder="Search by title" onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Year</th>
            <th>Director</th>
            <th>Actors</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.slice(0, 10).map(movie => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.releaseYear}</td>
              <td>{movie.director}</td>
              <td>{movie.actors.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;



