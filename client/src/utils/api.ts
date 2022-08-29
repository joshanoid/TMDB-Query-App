import axios from 'axios'

import { GenresResult, SearchResult } from './types'

const API_URL = 'http://localhost:3000'

export const fetchGenres = () => axios.get<GenresResult>(`${API_URL}/genres`).then((response) => response.data.genres)

export const fetchMovies = (searchTerm: string, page = 1) =>
    axios
        .get<SearchResult>(`${API_URL}/search`, {
            params: { query: searchTerm, page },
        })
        .then((response) => response.data)
