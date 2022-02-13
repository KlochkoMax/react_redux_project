import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreServices} from "../services/genre.services";


let initialState = {
    genres:[],
    filmsByGenre:[],
    error: null,
    currentPageForGenre: 1,
    genreId: null,
}

export const AllGenres = createAsyncThunk(
    'genreSlice/AllGenres',
    async (_)=>{
        try {
            const genres = await genreServices.getGenres();
            return genres;
        }catch (e){

        }
    }
)

export const ByGenre = createAsyncThunk(
    'genreSlice/ByGenre',
    async (state,{getState}) =>{
        let {Genre:{genreId}} = getState(state)
        console.log(genreId)
        try {
            let filmsByGenre = await genreServices.getMoviesByGenre(genreId)
            return filmsByGenre
        }catch (e){

        }
    }
)

let genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        getGenreId: (state, action) => {
            state.genreId = action.payload
        }
    },

    extraReducers: {
        [AllGenres.fulfilled]: (state, action) => {
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

export const {getGenreId} = genreSlice.actions
export default genreReducer;