import React from 'react';

const Movie = ({movie}) => {

    console.log(movie)

    return (
        <div>
            <div>
                <img src={movie.poster_path} alt="picture"/>
                <h4>{movie.original_title}</h4>
            </div>
        </div>
    );
};

export default Movie;