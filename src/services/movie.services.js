import {axiosServices} from "./axios.services";
import {apiKey, url} from "../configs/url";


export const movieServices = {
    getAllMovies:(currentPage)=> axiosServices.get(`${url.movies}?api_key=${apiKey}&page=${currentPage}`).then(value => value.data),
    getMovieInfo:(movieId)=>axiosServices.get(`${url.movieDetail}/${movieId}?api_key=${apiKey}`).then(value => value.data),
}
