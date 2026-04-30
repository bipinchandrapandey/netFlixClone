import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import "./App.css";

const API_KEY = "82a586511emsh647ef6752ce94aep11575ajsne19c9e3dfa9b";

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    const url = `https://netflix54.p.rapidapi.com/search/?query=${query}&offset=0&limit=25&lang=en`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      
   
      console.log("RAPIDAPI DATA:", data); 


      if (data.titles) {
        setMovies(data.titles);
      } else if (data.results) {
        setMovies(data.results);
      } else if (data.items) {
        setMovies(data.items);
      } else if (Array.isArray(data)) {
        setMovies(data);
      } else {
      
        setMovies([]);
      }
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Netflix Clone</h1>
        <SearchBar onSearch={searchMovies} />
      </header>
      <main>
        <div className="movie-list">
          {Array.isArray(movies) && movies.map((movie, index) => (
            <MovieCard key={movie?.id || index} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;