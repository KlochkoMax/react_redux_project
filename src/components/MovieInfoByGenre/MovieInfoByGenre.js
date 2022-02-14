import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {MovieDetailsGenreBlock} from "../../store/genre.slice";
import css from "../MovieInfo/movieInfo.module.css";
import Badges from "../MovieInfo/Badges/Badges";

const MovieInfoByGenre = () => {

    let {movieInfo:{title,poster_path,overview,vote_average,genres}, movieId} = useSelector(state => state['Genre']);

    localStorage.setItem('Page', movieId)

    let dispatch = useDispatch();

    let badges = genres;

    useEffect(()=>{
        dispatch(MovieDetailsGenreBlock())
    },[movieId])

    return (
        <div>

            <div>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={"poster"}/>
            </div>

            <div>
                <div>Original title : {title}</div>
                <div>Vote average: {vote_average}</div>
                <div>Overview : {overview}</div>
                <div>Genre: {badges && badges.map(value => <Badges key={value.id}  badges={value}/>)}</div>
                <button>Previous page</button>
            </div>

        </div>
    );
};


export default MovieInfoByGenre;