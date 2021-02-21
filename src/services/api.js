import axios from "axios";

export const api = axios.create({
    baseURL:"https://hear-me-api.herokuapp.com"
})