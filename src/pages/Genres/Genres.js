import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AllGenres} from "../../store/genre.slice";
import {Outlet} from "react-router-dom";

import GenreBadge from "../../components/GenreBadge/GenreBadge";
import css from "./genres.module.css"

const Genres = () => {

    let {genres:{genres}} = useSelector(state => state['Genre'])

    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(AllGenres())
    },[])

    return (
        <div className={css.genresBody}>
            <div className={css.genresBlock}>
                {genres && genres.map(value => <GenreBadge key={value.id} genre={value}/>)}
            </div>

            <div>
                <Outlet/>
            </div>
        </div>


    );
};

export default Genres;