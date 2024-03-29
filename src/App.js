import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import MovieCard from './MovieCard';

import './App.css'
import SearchIcon from './search.svg'

//contents of this can be found by going to console in the browser, then checking the array, then right click copy object
const movie1 = {
    "Title": "Your Name.",
    "Year": "2016",
    "imdbID": "tt5311514",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_SX300.jpg"
  }

//apiKey: 4b15ee39 

const API_URL = "http://www.omdbapi.com?apikey=4b15ee39";

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Your Name')
    }, []);

    return (
        <div className="App">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {if (e.key === 'Enter') {searchMovies(searchTerm)}}}
                />
                <img 
                    src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
                    alt="search"
                    onClick={() => {searchMovies(searchTerm)}}
                />
            </div>
            {
                movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} {...movie} />
                        ))}
                    </div>
                    ) : (
                        <div className = "empty">
                            <h2> No Movies Found </h2>
                        </div>
                )
            }
  
        </div>
    );
}

export default App;