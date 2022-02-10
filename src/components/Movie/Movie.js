import React from 'react';

import css from './movie.module.css'
import {Link} from "react-router-dom";

const Movie = ({movie}) => {

    return (
        <div className={css.movieBlock}>
            <Link to={'/movieInfo'}>
                <img className={css.imgMovieBlock} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="picture"/>
                <div className={css.titleAverage}>
                    <h4>{movie.original_title}</h4>
                    <h4>{movie.vote_average}</h4>
                </div>
            </Link>
        </div>
    );
};

export default Movie;


