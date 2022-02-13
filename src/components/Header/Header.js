import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {

    return (
        <div className={css.header_body}>
            <div className={css.header}>
                <div>
                    <h2>Site`s name</h2>
                </div>

                <div>
                    <h2><NavLink to={'/movies'} onClick={window.location.reload}>Movies</NavLink></h2>
                </div>

                <div>
                    <h2><NavLink to={'/genres'}>Genres</NavLink></h2>
                </div>

                <div>
                    <h2>Login</h2>
                </div>

            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Header;