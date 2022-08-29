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

export type ExtendedMovie = Movie & {
    belongs_to_collection: null | Record<string, unknown>
    budget: number
    genres: ReadonlyArray<Genre>
    homepage: string | null
    imdb_id: string | null
    production_companies: ReadonlyArray<{ name: string; id: number; logo_path: string | null; origin_country: string }>
    production_countries: ReadonlyArray<{ iso_3166_1: string; name: string }>
    revenue: number
    runtime: number | null
    spoken_languages: ReadonlyArray<{ iso_639_1: string; name: string }>
    status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled'
    tagline: string | null
    wikiDetails?: string
}
