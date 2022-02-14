import React from 'react';
import css from "./filmListByGenre.module.css"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getMovieId} from "../../store/genre.slice";

const FilmListbyGenre = ({movie:{id,original_title,vote_average,poster_path}}) => {

    let dispatch = useDispatch();

    return (
        <div className={css.FilmListByGenreBlock} onClick={()=>dispatch(getMovieId(id))}>
            <Link to={'movieInfoByGenre'}>
                <img className={css.imgMovieBlock} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="picture"/>
                <div className={css.filmInfo}>
                    <h4>{original_title}</h4>
                    <h4 className={css.average}>{vote_average}</h4>
                </div>
            </Link>
        </div>
    );
};

export default FilmListbyGenre;