import * as express from 'express'

import genres from './routes/genres'
import search from './routes/search'

const app = express()

app.use(genres)
app.use(search)

const { PORT = 3000 } = process.env

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on ${PORT}...`)
})
