import * as express from 'express'
import { Request, Response } from 'express'

const app = express()

app.get('/', (_req: Request, res: Response) => {
    res.send({
        message: 'hello world',
    })
})

const { PORT = 3000 } = process.env

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
