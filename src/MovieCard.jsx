import React from "react";

const MovieCard = ({ movie }) => {

    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div className="poster">
                <img src={
                movie.Poster !== 'N/A' ?  movie.Poster : 'https:placeholder.com/400'} alt="poster" />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
    </div>
    )
}

export default MovieCard;
