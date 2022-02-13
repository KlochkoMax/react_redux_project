import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {AllMovies, nextPage,prevPage} from "../../store/movie.slice";
import Movie from "../../components/Movie/Movie";
import css from './movies.module.css'


const Movies = () => {

    let {movies:{results}, currentPage} = useSelector(state => state['Movies']);

    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(AllMovies(currentPage))
    },[currentPage])

    return (
        <div>
            <div className={css.movies_block}>
                {results && results.map(value => <Movie key={value.id} movie={value}/> )}
            </div>
            <div className={css.pagination}>
                <button onClick={()=>dispatch(prevPage())} name="prev" >Previous page</button>
                <div>{currentPage}</div>
                <button onClick={()=>dispatch(nextPage())} name="next">Next page</button>
            </div>
        </div>
    );

}

export default Movies;