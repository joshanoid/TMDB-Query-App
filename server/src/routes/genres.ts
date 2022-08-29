import axios from 'axios'
import * as express from 'express'

import { Genre } from 'types'

import { TMDB_API_KEY } from '../constants'

const router: express.Router = express.Router()

type Genres = {
    genres: ReadonlyArray<Genre>
}
type GenresRequest = express.Request<Record<string, unknown>, Genres, Record<string, unknown>, Record<string, unknown>>
type GenresResponse = express.Response<Genres>

router.get('/genres', async (_req: GenresRequest, res: GenresResponse, next) => {
    try {
        const {
            data: { genres },
        } = await axios.get<Genres>('https://api.themoviedb.org/3/genre/movie/list', {
            params: {
                api_key: TMDB_API_KEY,
            },
        })

        res.send({ genres })
    } catch (error) {
        next(error)
    }
})

export default router
