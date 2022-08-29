import * as React from 'react'
import { Box, CircularProgress, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useQuery } from '@tanstack/react-query'

import { Movies } from 'features/Movies'
import { MovieDetails } from 'features/MovieDetails'
import { fetchGenres } from 'utils/api'
import './index.css'

export const Main = () => {
    const [searchTerm, setSearchTerm] = React.useState('')
    const [selectedMovie, setSelectedMovie] = React.useState<number | null>(null)
    const searchFieldRef = React.useRef<HTMLInputElement>(null)
    const { data } = useQuery(['genres'], fetchGenres)

    return (
        <Stack spacing={2} padding="0 5vw" height="100%">
            <Typography variant="h1" gutterBottom align="center">
                TMDB Query App
            </Typography>
            <Box width="100%">
                <Stack direction="row" width="100%">
                    <TextField label="Search..." variant="outlined" fullWidth inputRef={searchFieldRef} />
                    <IconButton aria-label="search" onClick={() => setSearchTerm(searchFieldRef.current?.value ?? '')}>
                        <SearchIcon />
                    </IconButton>
                </Stack>
            </Box>
            {data ? (
                <Stack direction="row" spacing={4} width="100%" flexGrow={1}>
                    <Paper elevation={3} sx={{ width: '50%', height: '100%' }}>
                        <Typography variant="h2">Search results:</Typography>
                        {searchTerm === '' ? (
                            <Typography variant="body2">Please use the search field above</Typography>
                        ) : (
                            <Movies searchTerm={searchTerm} genres={data} setSelectedMovie={setSelectedMovie} />
                        )}
                    </Paper>
                    <Paper elevation={3} sx={{ width: '50%', height: '100%' }}>
                        <Typography variant="h2">Selected movie details:</Typography>
                        {selectedMovie ? (
                            <MovieDetails selectedMovie={selectedMovie} />
                        ) : (
                            <Typography variant="body2">Please click on one of the movie titles in the list</Typography>
                        )}
                    </Paper>
                </Stack>
            ) : (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress /> Loading
                </Box>
            )}
        </Stack>
    )
}
