import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {MovieDetailsGenreBlock} from "../../store/genre.slice";
import Badges from "../MovieInfo/Badges/Badges";
import Stars from "../StarsRating/Stars";
import css from "./movieInfoByGenre.module.css"

const MovieInfoByGenre = () => {

    let {movieInfo:{title,poster_path,overview,vote_average,genres}, movieId} = useSelector(state => state['Genre']);

    localStorage.setItem('Page', movieId)

    let dispatch = useDispatch();

    let badges = genres;

    useEffect(()=>{
        dispatch(MovieDetailsGenreBlock())
    },[movieId])

    return (
        <div className={css.movieByGenreBlock}>

            <div className={css.imgBlock}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={"poster"}/>
            </div>

            <div className={css.movieByGenreDetails}>
                <ul>
                {<Stars/>}
                <div>Original title : {title}</div>
                <div>Vote average: {vote_average}</div>
                <div className={css.genre}>Genre: {badges && badges.map(value => <Badges key={value.id}  badges={value}/>)}</div>
                <div>Overview : {overview}</div>
                </ul>
            </div>

        </div>
    );
};


export default MovieInfoByGenre;