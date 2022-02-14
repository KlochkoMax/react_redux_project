import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreServices} from "../services/genre.services";
import {movieServices} from "../services/movie.services";


let initialState = {
    genres:[],
    filmsByGenre:[],
    movieInfo:{},
    currentPageForGenre: 1,
    movieId: localStorage.getItem('Page'),
}

export const AllGenres = createAsyncThunk(
    'genreSlice/AllGenres',
    async (_)=> {
        const genres = await genreServices.getGenres();
        return genres;
    }
)

export const ByGenre = createAsyncThunk(
    'genreSlice/ByGenre',
    async (state,{getState}) =>{
        let {Genre:{genreId,currentPageForGenre}} = getState(state)
            let filmsByGenre = await genreServices.getMoviesByGenre(genreId,currentPageForGenre)
            return filmsByGenre
    }
)

export const MovieDetailsGenreBlock = createAsyncThunk(
    'genreSlice/MovieDetailsGenreBlock',
    async (state, {getState}) => {
        let {Genre: {movieId}} = getState(state)
        return await movieServices.getMovieInfo(movieId)
    }
)

let genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        getGenreId: (state, action) => {
            state.genreId = action.payload
        },

        PrevPage:(state)=>{
            if(state.currentPageForGenre>=2)
            state.currentPageForGenre= state.currentPageForGenre - 1
        },

        NextPage:(state)=>{
            state.currentPageForGenre = state.currentPageForGenre +1
        },

        getMovieId:(state,action) =>{
            state.movieId = action.payload
        }
    },

    extraReducers: {

        [MovieDetailsGenreBlock.fulfilled]:(state,action)=>{
            state.status = 'fulfilled'
            state.movieInfo = action.payload
        },

        [AllGenres.fulfilled]:(state, action) => {
            state.status = 'fulfilled'
            state.genres = action.payload
        },

        [ByGenre.fulfilled]:(state,action)=>{
            state.status = 'fulfilled'
            state.filmsByGenre = action.payload
        }

    }
})

const genreReducer = genreSlice.reducer;

export const {getGenreId,PrevPage,NextPage,getMovieId} = genreSlice.actions
export default genreReducer;