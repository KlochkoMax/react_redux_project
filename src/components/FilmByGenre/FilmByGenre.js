import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ByGenre, PrevPage,NextPage} from "../../store/genre.slice";

import FilmListbyGenre from "../FilmListByGenre/FilmListbyGenre";
import css from "./filmByGenre.module.css"

const FilmByGenre = () => {

    let {filmsByGenre:{results}, genreId, currentPageForGenre} = useSelector(state => state['Genre']);

    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(ByGenre())
    },[genreId,currentPageForGenre])

    return (
        <div className={css.filmByGenreBlock}>
            {results && results.map(value => <FilmListbyGenre key ={value.id} movie={value}/>)}
            <div className={css.button}>
                <button onClick={()=>dispatch(PrevPage())}><h2>Previous page</h2></button>
                <button><h2>{currentPageForGenre}</h2></button>
                <button onClick={()=>dispatch(NextPage())}><h2>Next page</h2></button>
            </div>
        </div>
    );
};

export default FilmByGenre;