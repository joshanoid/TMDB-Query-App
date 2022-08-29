import axios from 'axios'
import * as express from 'express'
import { validationResult, query, ValidationError, Result } from 'express-validator'
import { parse } from 'node-html-parser'

import { ExtendedMovie } from 'types'

import { TMDB_API_KEY } from '../constants'

const router: express.Router = express.Router()

type MovieRequest = express.Request<
    Record<string, unknown>,
    ExtendedMovie,
    Record<string, unknown>,
    { movieId: number }
>
type MovieResponse = express.Response<ExtendedMovie | { errors: Result<ValidationError> }>

router.get(
    '/movie',
    [query('movieId').isNumeric()],
    async (req: MovieRequest, res: MovieResponse, next: express.NextFunction) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.status(400).json({ errors })
        }

        try {
            const { data } = await axios.get<ExtendedMovie>(`https://api.themoviedb.org/3/movie/${req.query.movieId}`, {
                params: {
                    api_key: TMDB_API_KEY,
                },
            })

            const { status, data: wikiData } = await axios.get<string>(`https://en.wikipedia.org/wiki/${data.title}`, {
                validateStatus: () => true,
            })

            if (status === 200) {
                const html = parse(wikiData)
                const wikiDetails = html.querySelector('table.infobox')?.nextElementSibling.innerHTML

                res.send({ ...data, wikiDetails })
            } else {
                res.send(data)
            }
        } catch (error) {
            next(error)
        }
    },
)

export default router
