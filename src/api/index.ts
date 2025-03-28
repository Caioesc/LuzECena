import axios from "axios";
import { Movie } from "../Types";

const BASE_URL = "http://localhost:3001"

export const getMovies = async (): Promise<Movie[]> =>{
    const response = await axios.get<Movie[]>(`${BASE_URL}/movies`)
}