import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movie.slice";
import genreReducer from "./genre.slice"

const store = configureStore({
    reducer:{
        Movies: movieReducer,
        Genre: genreReducer
    }
})

export default store;