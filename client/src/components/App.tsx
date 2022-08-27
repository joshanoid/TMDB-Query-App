import * as React from 'react'
import Button from '@mui/material/Button'

type AppProps = { num: number }

export const App = ({ num }: AppProps) => (
    <>
        <Button variant="contained">Hello World</Button> <h1>Total Number: {num}</h1>
    </>
)
