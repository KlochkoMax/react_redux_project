import React from 'react';

import css from "./GenreBadge.mocule.css"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getGenreId} from "../../store/genre.slice";

const GenreBadge = ({genre:{id,name}}) => {

    let dispatch = useDispatch();

    return (
        <div>
            <NavLink to={'filmByGenre'} onClick={()=>dispatch(getGenreId(id))}>
                <div><p className={css.genreBadge}>{name}</p></div>
            </NavLink>
        </div>
    );
};

export default GenreBadge;