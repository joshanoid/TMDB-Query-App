import axios from 'axios'
import * as express from 'express'
import { validationResult, query, ValidationError, Result } from 'express-validator'

import { Movie } from 'types'

import { TMDB_API_KEY } from '../constants'

const router: express.Router = express.Router()

type Movies = {
    page: number
    results: ReadonlyArray<Movie>
    total_pages: number
    total_results: number
}
type SearchRequest = express.Request<
    Record<string, unknown>,
    Movies,
    Record<string, unknown>,
    { query: string; page: number }
>
type SearchResponse = express.Response<Movies | { errors: Result<ValidationError> }>

router.get(
    '/search',
    [query('query').not().isEmpty().trim().escape(), query('page').isNumeric()],
    async (req: SearchRequest, res: SearchResponse, next: express.NextFunction) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(400).json({ errors })
        }

        try {
            const { data } = await axios.get<Movies>('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: TMDB_API_KEY,
                    query: req.query.query,
                    page: req.query.page,
                },
            })

            res.send(data)
        } catch (error) {
            next(error)
        }
    },
)

export default router
