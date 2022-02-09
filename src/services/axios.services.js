import axios from "axios";
import baseURL from "../configs/url";


export const axiosServices = axios.create({baseURL})