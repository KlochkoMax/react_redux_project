import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MovieDetails} from "../../store/movie.slice";

import css from "./movieInfo.module.css"
import Movies from "../../pages/Movies/Movies";
import Badges from "./Badges/Badges";
import Stars from "../StarsRating/Stars";

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

                <div className={css.aboutImageBlock}>
                    <img className={css.aboutImage} src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={"poster"}/>
                </div>

                <div className={css.aboutMovieInfo}>
                    {<Stars/>}
                    <div>Original title : {movieInfo.original_title}</div>
                    <div>Release date : {movieInfo.release_date}</div>
                    <div>Overview : {movieInfo.overview}</div>
                    <div className={css.genre}>Genre: <div style={{display:"flex", gap:"20px"}}>{badges && badges.map(value => <Badges key={value.id}  badges={value}/>)}</div></div>
                </div>

        </div>
    );
};


export default MovieInfo;