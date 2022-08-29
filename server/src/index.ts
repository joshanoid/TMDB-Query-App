import * as express from 'express'
import * as cors from 'cors'

import genres from './routes/genres'
import search from './routes/search'
import movie from './routes/movie'

const app = express()
const allowedOrigins = ['http://localhost:8080']

const options: cors.CorsOptions = {
    origin: allowedOrigins,
}

app.use(cors(options))
app.use(genres)
app.use(search)
app.use(movie)

const { PORT = 3000 } = process.env

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on ${PORT}...`)
})
