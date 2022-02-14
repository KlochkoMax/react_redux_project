import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieServices} from "../services/movie.services";


const initialState = {
    movies: [],
    movieInfo: {},
    currentPage: 1,
    movieId: localStorage.getItem('Page'),
}

export const AllMovies = createAsyncThunk(
    'movieSlice/AllMovies',
    async (state, {getState}) => {
        let {Movies: {currentPage}} = getState(state)
        return await movieServices.getAllMovies(currentPage);

    }
)

export const MovieDetails = createAsyncThunk(
    'movieSlice/MovieDetails',
    async (state, {getState}) => {
        let {Movies: {movieId}} = getState(state)
        return await movieServices.getMovieInfo(movieId)

    }
)


let movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        nextPage:(state)=>{
                state.currentPage = state.currentPage + 1
        },

        prevPage:(state)=>{
            if (state.currentPage >=2){
                state.currentPage = state.currentPage - 1
            }

        },
        getMovieId:(state,action) =>{
            state.movieId = action.payload
        }

    },
    extraReducers:{
        [AllMovies.fulfilled]:(state,action)=>{
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [MovieDetails.fulfilled]:(state,action)=>{
            state.status = 'fulfilled'
            state.movieInfo = action.payload
        }
    }
})

const movieReducer = movieSlice.reducer;

export const {nextPage,prevPage,getMovieId} = movieSlice.actions
export default movieReducer;