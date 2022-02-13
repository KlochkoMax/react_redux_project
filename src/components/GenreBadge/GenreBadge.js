import React from 'react';

import css from "./GenreBadge.mocule.css"
import {NavLink} from "react-router-dom";

const GenreBadge = ({genre:{id,name}}) => {

    return (
        <NavLink to={'/genres/film'} className={css.genreBadge}>
            <div>{name}</div>
        </NavLink>
    );
};

export default GenreBadge;