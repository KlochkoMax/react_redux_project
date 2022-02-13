import {axiosServices} from "./axios.services";
import {apiKey, url} from "../configs/url";

export const genreServices = {
    getGenres:()=>axiosServices.get(`${url.genres}?api_key=${apiKey}`).then(value => value.data),
    getMoviesByGenre:(genreId)=>axiosServices.get(`${url.movies}?api_key=${apiKey}&with_genres=${genreId}`).then(value => value.data)
}