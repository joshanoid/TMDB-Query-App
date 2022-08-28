import axios from 'axios'
import * as express from 'express'
import { Request, Response } from 'express'
import { validationResult, query, ValidationError, Result } from 'express-validator'

const app = express()
const TMDB_API_KEY = '62ac850acd5140d6d245c25118fb853b'

type Movie = {
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
type SearchResult = {
    page: number
    results: ReadonlyArray<Movie>
}
type SearchRequest = Request<Record<string, unknown>, SearchResult, Record<string, unknown>, { q: string }>
type SearchResponse = Response<SearchResult | { errors: Result<ValidationError> }>

app.get(
    '/search',
    [query('q').isLength({ min: 3 }).not().isEmpty().trim().escape()],
    async (req: SearchRequest, res: SearchResponse) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors })
        }

        const { data } = await axios.get<SearchResult>(
            `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${req.query.q}`,
        )

        return res.send(data)
    },
)

const { PORT = 3000 } = process.env

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on ${PORT}...`)
})
