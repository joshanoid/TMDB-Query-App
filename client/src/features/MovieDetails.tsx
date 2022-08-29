import * as React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Box, CircularProgress, Link, Paper } from '@mui/material'

import { fetchMovie } from 'utils/api'

type Props = {
    selectedMovie: number
}

export const MovieDetails = ({ selectedMovie }: Props) => {
    const { data } = useQuery(['movie', selectedMovie], () => fetchMovie(selectedMovie))

    return (
        <Paper sx={{ width: '100%', mb: 2 }}>
            {data ? (
                <Box>
                    {data.wikiDetails && <Box dangerouslySetInnerHTML={{ __html: data.wikiDetails }} />}
                    <Link href={`https://en.wikipedia.org/wiki/${data.title}`} target="_blank">
                        Wikipedia link
                    </Link>{' '}
                    |{' '}
                    <Link href={`https://www.imdb.com/title/${data.imdb_id}`} target="_blank">
                        IMDB link
                    </Link>
                </Box>
            ) : (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress /> Loading movie details
                </Box>
            )}
        </Paper>
    )
}
