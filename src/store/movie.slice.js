import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import {movieServices} from "../services/movie.services";
import Movies from "../pages/Movies/Movies";


const initialState = {
    movies:[],
    status:null,
    error:null,
    currentPage: 1,
}


export const AllMovies = createAsyncThunk(
    'movieSlice/AllMovies',
    async (state,{ getState})=>{
        let {Movies:{currentPage}} = getState(state)
        console.log(currentPage)
        try {
            const movies = await movieServices.getAllMovies(currentPage);
            return movies;
        }
        catch (e){

        }
    }
)



    let movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{
        nextPage:(state)=>{
            state.currentPage = state.currentPage + 1
        },

        prevPage:(state)=>{
            state.currentPage = state.currentPage - 1
        }
    },
    extraReducers:{
        [AllMovies.pending]:(state)=>{
            state.status = 'pending'
            state.error = null
        },
        [AllMovies.fulfilled]:(state,action)=>{
            state.status = 'fulfilled'
            state.movies = action.payload
        },
        [AllMovies.rejected]:(state,action)=>{

        }
    }
})

const movieReducer = movieSlice.reducer;

export const {nextPage,prevPage} = movieSlice.actions
export default movieReducer;