import {axiosServices} from "./axios.services";
import {apiKey, url} from "../configs/url";


export const movieServices = {
    getAllMovies:(currentPage)=> axiosServices.get(`${url.movies}?api_key=${apiKey}&page=${currentPage}`).then(value => value.data),
    getGenres:()=>axiosServices.get(`${url.genres}?api_key=${apiKey}`).then(value => value.data)
}


// https://api.themoviedb.org/3/discover/movie?api_key=55bb302bf6b5aa74668c977dd8cf49bb&page=2