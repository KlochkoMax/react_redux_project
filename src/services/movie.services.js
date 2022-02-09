import {axiosServices} from "./axios.services";
import {apiKey, url} from "../configs/url";


export const movieServices = {
    getAllMovies:()=> axiosServices.get(`${url.movies}?api_key=${apiKey}`).then(value => value.data),
    getGenres:()=>axiosServices.get(`${url.genres}?api_key=${apiKey}`).then(value => value.data)
}


