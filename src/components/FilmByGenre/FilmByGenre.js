import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ByGenre} from "../../store/genre.slice";

import FilmListbyGenre from "../FilmListByGenre/FilmListbyGenre";
import css from "./filmByGenre.module.css"

const FilmByGenre = () => {

    let {filmsByGenre:{results}, genreId} = useSelector(state => state['Genre']);

    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(ByGenre())
    },[genreId])

    return (
        <div className={css.filmByGenreBlock}>
            {results && results.map(value => <FilmListbyGenre key ={value.id} movie={value}/>)}
        </div>
    );
};

export default FilmByGenre;