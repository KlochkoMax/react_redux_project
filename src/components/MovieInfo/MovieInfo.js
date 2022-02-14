import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MovieDetails} from "../../store/movie.slice";

import css from "./movieInfo.module.css"
import Movies from "../../pages/Movies/Movies";
import Badges from "./Badges/Badges";

const MovieInfo = () => {

    let {movieInfo, movieId} = useSelector(state => state['Movies']);

    console.log(movieInfo)

    let dispatch = useDispatch();

    let badges = movieInfo.genres;

    localStorage.setItem('Page', movieId)

    useEffect(()=>{
        dispatch(MovieDetails())
    },[])

    return (
        <div className={css.aboutMovieBlock}>

                <div className={css.aboutImageVideoBlock}>
                    <img className={css.aboutImage} src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={"poster"}/>
                </div>

                <div className={css.aboutMovieInfo}>
                    <div>Original title : {movieInfo.original_title}</div>
                    <div>Release date : {movieInfo.release_date}</div>
                    <div>Overview : {movieInfo.overview}</div>
                    <div>Genre: {badges && badges.map(value => <Badges key={value.id}  badges={value}/>)}</div>
                    <button>Previous page</button>
                </div>

        </div>
    );
};


export default MovieInfo;