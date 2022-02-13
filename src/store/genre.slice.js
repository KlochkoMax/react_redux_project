import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreServices} from "../services/genre.services";


let initialState = {
    genres:[],
    filmsByGenre:[],
    error: null,
    currentPageForGenre: 1,
    genreId:null,
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

export const FilmByGenre = createAsyncThunk(
    'genreSlice/FilmByGenre',
    async (state,{getState}) =>{
        try {

        }catch (e){

        }
    }
)

let genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers:{

        },

    extraReducers: {
        [AllGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.genres = action.payload
        }

    }
})

const genreReducer = genreSlice.reducer;

export default genreReducer;