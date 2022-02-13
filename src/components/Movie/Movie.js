import React from 'react';

import css from './movie.module.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getMovieId} from "../../store/movie.slice";


const Movie = ({movie}) => {

    let dispatch = useDispatch();

    return (
        <div className={css.movieBlock} onClick={()=>dispatch(getMovieId(movie.id))} >
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


