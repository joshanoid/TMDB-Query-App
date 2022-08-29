export type Movie = {
    poster_path: string
    adult: boolean
    overview: string
    release_date: string
    genre_ids: ReadonlyArray<number>
    id: number
    original_title: string
    original_language: string
    title: string
    backdrop_path: string
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
}

export type Genre = {
    id: number
    name: string
}

export type SearchResult = {
    page: number
    results: ReadonlyArray<Movie>
    total_pages: number
    total_results: number
}

export type GenresResult = {
    genres: ReadonlyArray<Genre>
}
