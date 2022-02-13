import React from 'react';
import css from "./filmListByGenre.module.css"

const FilmListbyGenre = ({movie:{id,original_title,vote_average,poster_path}}) => {

    return (
        <div className={css.FilmListByGenreBlock}>
            <img className={css.imgMovieBlock} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="picture"/>
            <div className={css.filmInfo}>
                <h4>{original_title}</h4>
                <h4>{vote_average}</h4>
            </div>
        </div>
    );
};

export default FilmListbyGenre;