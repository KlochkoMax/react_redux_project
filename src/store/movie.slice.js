import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {movieServices} from "../services/movie.services";


const initialState = {
    movies:[],
    status:null,
    error:null,
}

export const AllMovies = createAsyncThunk(
    'movieSlice/AllMovies',
    async ()=>{
        try {
            const movies = await movieServices.getAllMovies();
            return movies
        }
        catch (e){

        }
    }
)



    let movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{

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

export const {getMovies} = movieSlice.actions
export default movieReducer;