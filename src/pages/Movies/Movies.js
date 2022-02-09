import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AllMovies} from "../../store/movie.slice";
import Movie from "../../components/Movie/Movie";



const Movies = () => {

    let {movies:{results}} = useSelector(state => state['Movies']);

    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(AllMovies())
    },[])

    console.log(results)


    return (
        <div>
            <p>Movies</p>
            {/*{results.map(value => <Movie key={value.id} movie={value}/> )}*/}
        </div>
    );
}

export default Movies;